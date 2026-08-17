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
