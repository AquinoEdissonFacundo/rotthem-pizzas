// Minimal CSV parser for Google Sheets "publish to web" exports.
// Handles quoted fields (commas/newlines inside quotes) and "" escaping,
// which a naive text.split(",") would break on for real sentence content.
export function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  const src = text.replace(/^﻿/, ""); // strip UTF-8 BOM

  for (let i = 0; i < src.length; i++) {
    const char = src[i];
    if (inQuotes) {
      if (char === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }
    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && src[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      rows.push(row);
      row = [];
    } else {
      field += char;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const nonEmptyRows = rows.filter((r) => r.some((cell) => cell.trim() !== ""));
  if (nonEmptyRows.length === 0) return [];
  const [header, ...body] = nonEmptyRows;
  return body.map((cells) => {
    const obj = {};
    header.forEach((key, i) => {
      obj[key.trim()] = (cells[i] ?? "").trim();
    });
    return obj;
  });
}
