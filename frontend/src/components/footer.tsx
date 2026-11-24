type FooterColumn = {
  title: string;
  items: { label: string; href: string }[];
};

const columns: FooterColumn[] = [
  {
    title: "Category",
    items: Array.from({ length: 6 }, (_, i) => ({
      label: "Item",
      href: `#item-${i + 1}`,
    })),
  },
  {
    title: "Category",
    items: Array.from({ length: 6 }, (_, i) => ({
      label: "Item",
      href: `#item-${i + 1}`,
    })),
  },
  {
    title: "Category",
    items: Array.from({ length: 6 }, (_, i) => ({
      label: "Item",
      href: `#item-${i + 1}`,
    })),
  },
];

type FooterProps = {
  featuredImage?: string;
  featuredTitle?: string;
  featuredHref?: string;
};

export default function Footer({
  featuredImage = "/room.jpg",
  featuredTitle = "Title",
  featuredHref = "/rooms",
}: FooterProps) {
  return (
    <footer className="w-full bg-white px-3 pb-2 pt-3 font-['Montserrat',sans-serif]">
      {/* Green panel with the notch cut out of the top edge */}
      <div
        className="relative mx-auto flex min-h-[560px] flex-col justify-between overflow-hidden rounded-xl bg-(--main)"
        style={{
          clipPath:
            "polygon(0 0, 18% 0, 27.5% 45px, 74% 45px, 81.5% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* Top content */}
        <div className="grid grid-cols-1 gap-10 px-6 pt-32 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 md:pt-40">
          {/* Featured card */}
          <a href={featuredHref} className="block max-w-[260px]">
            <img
              src={featuredImage}
              alt={featuredTitle}
              className="h-[92px] w-full rounded-2xl object-cover"
            />
            <h3 className="mt-3 text-5xl font-light leading-none text-white">
              {featuredTitle}
            </h3>
            <span className="text-base font-light text-white">See more...</span>
          </a>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <div key={i}>
                <h4 className="text-xl font-semibold text-[#dfe6c4]">
                  {col.title}
                </h4>
                <ul className="mt-3 space-y-0.5 text-sm text-white">
                  {col.items.map((item, j) => (
                    <li key={j}>
                      <a
                        href={item.href}
                        className="transition-opacity hover:opacity-70"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Oversized brand name, slightly cropped by the bottom edge */}
        <p
          aria-hidden="true"
          className="mt-16 select-none whitespace-nowrap text-center font-['Playfair_Display',serif] text-9xl uppercase leading-none tracking-tight text-white"
          style={{ transform: "translateY(20%)" }}
        >
          Majestic Haven
        </p>
      </div>

      <p className="mt-3 text-center text-[11px] text-[#6f9170]">
        Copyrighted since 2024
      </p>
    </footer>
  );
}