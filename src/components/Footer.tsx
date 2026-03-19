"use client";

const footerLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Contacto", href: "#contacto" },
];

function handleNav(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-14"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>

          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-1.5">
              <span className="font-playfair font-medium text-[20px] text-white">
                Marchetti
              </span>
              <span className="text-[20px] font-medium" style={{ color: "var(--gold)" }}>
                ·
              </span>
              <span className="font-inter font-light text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                Estudio Contable
              </span>
            </div>
            <p className="font-inter font-light text-[13px] max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Contabilidad clara para autónomos y PYMES en Argentina.
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="font-inter font-light text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-inter font-light text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {year} Cra. Sofía Marchetti · Mat. CPCE CABA Nº 00000 · Buenos Aires, Argentina
          </p>
          <p className="font-inter font-light text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            Diseño y desarrollo:{" "}
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              Pratissoli Studio
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
