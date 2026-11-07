import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  badge?: string;
}

export function MenuItem({
  title,
  description,
  price,
  imageUrl,
  badge,
}: MenuItemProps) {
  const orderLink = whatsappLink(
    `Hi Kiki's Kitchen, I would like to order ${title}`,
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/10">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal shadow-sm">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight">
            {title}
          </h3>
          <p className="shrink-0 rounded-full bg-saffron/25 px-3 py-1 font-display text-sm font-semibold text-charcoal">
            KES {price.toLocaleString("en-KE")}
          </p>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">
          {description}
        </p>

        <a
          href={orderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-white transition-colors hover:bg-palm-dark"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Order via WhatsApp
          <span className="sr-only"> — {title}</span>
        </a>
      </div>
    </article>
  );
}
