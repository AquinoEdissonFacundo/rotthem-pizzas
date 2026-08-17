import { useEffect, useState } from "react";
import { parseCSV } from "../lib/csv";

const CACHE_TTL_MS = 60 * 60 * 1000; // 1h: long enough to spare Sheets a request per pageview, short enough to feel "live"
const CACHE_PREFIX = "rotthem:sheet:";

function readCache(url) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + url);
    if (!raw) return null;
    const { at, rows } = JSON.parse(raw);
    return { at, rows, fresh: Date.now() - at < CACHE_TTL_MS };
  } catch {
    return null;
  }
}

function writeCache(url, rows) {
  try {
    localStorage.setItem(CACHE_PREFIX + url, JSON.stringify({ at: Date.now(), rows }));
  } catch {
    // storage unavailable (private mode, quota) — not critical, we just refetch next time
  }
}

/**
 * Reads a Google Sheets "publish to web" CSV and turns it into app data,
 * so a non-technical client can edit content without touching code or a backend.
 * Always renders `fallback` (the last known-good hardcoded data) first —
 * a slow, unpublished, or unreachable sheet never blanks the page.
 */
export function useSheetData(csvUrl, fallback, mapRows) {
  const [data, setData] = useState(() => {
    if (!csvUrl) return fallback;
    const cached = readCache(csvUrl);
    return cached?.rows ?? fallback;
  });

  useEffect(() => {
    if (!csvUrl) return undefined;
    const cached = readCache(csvUrl);
    if (cached?.fresh) return undefined; // recently fetched elsewhere in the last hour, skip the request

    let cancelled = false;
    fetch(csvUrl)
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((text) => {
        if (cancelled) return;
        const rows = mapRows(parseCSV(text));
        if (rows.length > 0) {
          setData(rows);
          writeCache(csvUrl, rows);
        }
      })
      .catch(() => {
        // sheet unpublished / offline / malformed: silently keep showing fallback or cached data
      });

    return () => {
      cancelled = true;
    };
  }, [csvUrl, mapRows]);

  return data;
}
