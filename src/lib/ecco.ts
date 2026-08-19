export const ECCO = {
  whatsappNumber: "5591981887462",
  whatsappDisplay: "(91) 98188-7462",
  instagramHandle: "@eccomaisengenharia",
  instagramUrl: "https://instagram.com/eccomaisengenharia",
  email: "eccomais@outlook.com",
  defaultMessage: "Olá! Vim pelo site da ECCO+ Engenharia e gostaria de solicitar um orçamento.",
};

export function whatsappUrl(message: string = ECCO.defaultMessage) {
  return `https://wa.me/${ECCO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
