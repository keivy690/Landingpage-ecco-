export const ECCO = {
  name: "ECCO+ Engenharia",
  legalName: "R. Andrade Pacheco Ltda.",
  cnpj: "44.773.811/0001-09",
  foundedYear: "2022",
  address: "Travessa Segunda de Queluz, 30, Canudos, Belém - PA, CEP 66070-500",
  streetAddress: "Travessa Segunda de Queluz, 30",
  neighborhood: "Canudos",
  postalCode: "66070-500",
  technicalManager: "Rafael Andrade Pacheco",
  professionalTitle: "Engenheiro Civil",
  rnp: "1517267048",
  professionalRegistration: "1517267048PA",
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
