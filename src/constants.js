export const WA_NUMBER = "595974962373";

export function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
