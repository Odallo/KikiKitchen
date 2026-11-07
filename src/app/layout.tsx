import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiki's Kitchen — African & Arab cuisine in Kitengela",
  description:
    "Biryani, pilau, dawa and fresh smoothies cooked in Kitengela. Order directly from Kiki's Kitchen on WhatsApp — no app commissions, delivery to your door.",
  openGraph: {
    title: "Kiki's Kitchen — African & Arab cuisine in Kitengela",
    description:
      "Craving biryani or pilau? Skip the app commissions and order directly from our kitchen to your door.",
    type: "website",
    locale: "en_KE",
  },
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
