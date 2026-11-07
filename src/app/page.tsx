import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { CateringForm } from "@/components/CateringForm";
import { MenuItem, type MenuItemProps } from "@/components/MenuItem";
import { SiteHeader } from "@/components/SiteHeader";
import { site, whatsappLink } from "@/lib/site";

const heroImage = "/images/hero-biryani.jpg";

const cateringImage = "/images/catering-spread.jpg";

const menuItems: MenuItemProps[] = [
  {
    title: "Chicken Biryani",
    description:
      "Aromatic basmati rice cooked with tender chicken and authentic Arab spices.",
    price: 800,
    imageUrl: "/images/chicken-biryani.jpg",
    badge: "Bestseller",
  },
  {
    title: "Beef Pilau",
    description:
      "Traditional Swahili spiced rice with rich, slow-cooked beef.",
    price: 700,
    imageUrl: "/images/beef-pilau.jpg",
  },
  {
    title: "Classic Ginger Dawa",
    description: "Soothing hot honey, lemon, and ginger infusion.",
    price: 300,
    imageUrl: "/images/ginger-dawa-tea.jpg",
  },
  {
    title: "Mango Passion Smoothie",
    description:
      "Fresh, locally sourced tropical fruits blended to perfection.",
    price: 400,
    imageUrl: "/images/mango-smoothie.jpg",
  },
];

const orderSteps = [
  {
    title: "Pick your dish",
    body: "Choose from the menu above — every plate is cooked to order.",
  },
  {
    title: "Message us",
    body: "Tap the WhatsApp button. Your order opens pre-filled, ready to send.",
  },
  {
    title: "We cook & deliver",
    body: "We confirm the total and bring it hot to your door in Kitengela.",
  },
];

function KangaTrim({ id }: { id: string }) {
  return (
    <svg aria-hidden="true" className="block h-3 w-full" height="12">
      <defs>
        <pattern id={id} width="24" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 6 6 0l6 6-6 6z" fill="#F2B544" />
          <circle cx="18" cy="6" r="1.5" fill="#FAF7F2" />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill="#211C18" />
      <rect width="100%" height="12" fill={`url(#${id})`} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative isolate overflow-hidden bg-charcoal"
        >
          <Image
            src={heroImage}
            alt="Chicken biryani served in a dark bowl with fresh herbs"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-charcoal/20"
          />

          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:px-8 lg:pb-24">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron sm:text-xs">
                <span className="h-px w-8 bg-saffron" aria-hidden="true" />
                Kenyan coast · Arab spice
              </p>

              <h1
                id="hero-heading"
                aria-label="Authentic African and Arab cuisine in Kitengela."
                className="mt-5 font-display text-[clamp(2.75rem,7vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-cream"
              >
                Authentic African &amp; Arab cuisine in
                <span className="text-saffron">{" "}Kitengela.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
                Craving biryani or pilau? Skip the app commissions and order
                directly from our kitchen to your door.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ember-dark px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-ember-deep"
                >
                  View menu &amp; order
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={whatsappLink(
                    "Hi Kiki's Kitchen, I'd like to ask about today's specials.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-6 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/70">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-saffron" aria-hidden="true" />
                  No app fees
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-saffron" aria-hidden="true" />
                  Cooked fresh daily
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-saffron" aria-hidden="true" />
                  Delivery in Kitengela
                </li>
              </ul>
            </div>

            {/* Kitchen ticket — the signature hero detail */}
            <aside className="relative hidden rounded-2xl bg-cream p-6 text-charcoal shadow-2xl shadow-black/30 lg:block">
              <span className="absolute -top-3 left-6 rounded-full bg-saffron px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-charcoal">
                Today&apos;s pot
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal/65">
                Straight from the kitchen
              </p>
              <div className="mt-3 flex items-start justify-between gap-3 border-b border-dashed border-charcoal/25 pb-4">
                <h2 className="font-display text-2xl font-semibold leading-tight">
                  Chicken Biryani
                </h2>
                <span className="shrink-0 font-display text-xl font-semibold">
                  KES 800
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                Aromatic basmati, tender chicken and authentic Arab spice. Ready
                from 11am.
              </p>
              <a
                href={whatsappLink(
                  "Hi Kiki's Kitchen, I would like to reserve a plate of Chicken Biryani",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ember-dark px-4 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Reserve a plate
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <p className="mt-4 flex items-center gap-2 text-xs text-charcoal/65">
                <Clock className="size-3.5" aria-hidden="true" />
                {site.hours}
              </p>
            </aside>
          </div>
        </section>

        <KangaTrim id="kanga-hero" />

        {/* Menu */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="scroll-mt-20 bg-cream py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-dark">
                  From our kitchen
                </p>
                <h2
                  id="menu-heading"
                  className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                  The dishes people come back for.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-charcoal/65">
                Tap a dish to order it straight on WhatsApp. No apps, no
                commission.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {menuItems.map((item) => (
                <MenuItem key={item.title} {...item} />
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="text-sm leading-relaxed text-charcoal/70">
                <strong className="font-semibold text-charcoal">
                  Can&apos;t decide?
                </strong>{" "}
                Tell us who you&apos;re feeding and we&apos;ll build the plate.
              </p>
              <a
                href={whatsappLink(
                  "Hi Kiki's Kitchen, I'd like help choosing an order.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-charcoal/15 px-5 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal/5"
              >
                Ask Kiki
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-14 grid gap-5 border-t border-charcoal/10 pt-8 sm:grid-cols-3">
              {orderSteps.map((step, index) => (
                <div key={step.title} className="flex gap-3">
                  <span className="font-display text-sm font-bold text-ember-dark">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/65">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catering */}
        <section
          id="catering"
          aria-labelledby="catering-heading"
          className="relative scroll-mt-20 overflow-hidden bg-ember py-20 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-saffron/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-ember-deep/30 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-16 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
                Catering &amp; bulk orders
              </p>
              <h2
                id="catering-heading"
                className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                Planning an event?
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal">
                We offer custom platters and bulk catering for corporate events,
                parties, and family gatherings.
              </p>

              <ul className="mt-6 space-y-3 text-sm font-medium text-charcoal">
                <li className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Custom platters for 10–200 guests
                </li>
                <li className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Biryani, pilau, sides and fresh drinks
                </li>
                <li className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Delivery across Kitengela and nearby estates
                </li>
              </ul>

              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-charcoal/15">
                <Image
                  src={cateringImage}
                  alt="A generous spread of breads, rice and stews for a family gathering"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <CateringForm />
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-20 bg-charcoal text-cream"
      >
        <KangaTrim id="kanga-footer" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <a
              href="#top"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-full"
              aria-label="Kiki's Kitchen — back to top"
            >
              <span className="grid size-9 place-items-center rounded-full bg-ember text-charcoal">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">
                Kiki&apos;s <span className="text-saffron">Kitchen</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              Kenyan coast meets Arab spice. Cooked fresh in Kitengela,
              delivered to your door.
            </p>
            <a
              href={whatsappLink(
                "Hi Kiki's Kitchen, I'd like to place an order.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-white transition-colors hover:bg-palm-dark"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Order on WhatsApp
            </a>
          </div>

          <div>
            <h2
              id="contact-heading"
              className="text-xs font-bold uppercase tracking-[0.2em] text-saffron"
            >
              Find us
            </h2>
            <address className="mt-4 space-y-3 not-italic text-sm text-cream/70">
              <p className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.location}
              </p>
              <p className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.hours}
              </p>
              <p className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-cream"
                >
                  {site.phoneDisplay}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">
              Explore
            </h2>
            <ul className="mt-2 text-sm text-cream/70">
              <li>
                <a
                  href="#menu"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-cream"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#catering"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-cream"
                >
                  Catering
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-cream"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(
                    "Hi Kiki's Kitchen, I'd like to place an order.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-cream"
                >
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© Kiki&apos;s Kitchen. All rights reserved.</p>
            <p>Powered by direct local ordering.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
