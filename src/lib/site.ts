export const site = {
  phoneDisplay: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  whatsappNumber: "254700000000",
  location: "Kitengela, Nairobi, Kenya",
  hours: "Mon–Sun, 8:00 AM – 9:00 PM",
} as const;

/** Build a WhatsApp deep link with a pre-filled, properly encoded message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
