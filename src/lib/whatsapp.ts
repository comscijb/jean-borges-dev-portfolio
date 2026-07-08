const WHATSAPP_NUMBER_JEAN = "5549991088198"
const WHATSAPP_NUMBER_JENNI = "5551996844722"

export function getWhatsAppUrlJean(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_JEAN}?text=${encodeURIComponent(message)}`
}
export function getWhatsAppUrlJenni(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_JENNI}?text=${encodeURIComponent(message)}`
}