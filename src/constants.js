export const WA_NUMBER = "595974962373";
export const WA_DISPLAY = "0974 962 373";
export const EMAIL = "hola@rotthem.com.py";
export const INSTAGRAM_HANDLE = "@rotthempizzas";
export const INSTAGRAM_URL = "https://www.instagram.com/rotthempizzas";
export const PEDIDOSYA_URL = "https://www.pedidosya.com.py";
export const ADDRESS_SHORT = "Capitán Pedro Carpinelli, Asunción";
export const ADDRESS_FULL =
  "Capitán Pedro Carpinelli, e/ Av. Choferes del Chaco y Guillermo Saraví, Asunción (a confirmar)";

export function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Google Sheets "publish to web" CSV links, so the client can edit the
// menu and the agenda from a spreadsheet without a backend or a redeploy.
// Leave empty to keep using the hardcoded fallback data in src/data/.
// Setup: Google Sheets → File → Share → Publish to web → pick the sheet
// tab → CSV → copy the generated link here.
export const PIZZAS_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_QtuoTkP88mD9Etrzc5dU2hgYH-S9Ba9AO_2Qgz7uF6YlF2cbeeq4CTtor7hOewgBdu9KHrSFalvs/pub?gid=0&single=true&output=csv";
export const EVENTOS_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_QtuoTkP88mD9Etrzc5dU2hgYH-S9Ba9AO_2Qgz7uF6YlF2cbeeq4CTtor7hOewgBdu9KHrSFalvs/pub?gid=1734278&single=true&output=csv";
