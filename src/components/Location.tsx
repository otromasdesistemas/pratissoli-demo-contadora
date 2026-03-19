"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Santa Fe 2300, Piso 3, Of. 8 · Recoleta, CABA",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+54 9 11 5678-9012",
    href: "https://wa.me/5491156789012",
  },
  {
    icon: Mail,
    label: "Email",
    value: "consultas@marchettistudio.com.ar",
    href: "mailto:consultas@marchettistudio.com.ar",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a viernes 9 a 18hs · Atención remota sin límite horario",
  },
];

export default function Location() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT — Contact info ── */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p
                className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--accent)" }}
              >
                Ubicación y contacto
              </p>
              <h2
                className="font-playfair font-medium text-[clamp(32px,4vw,44px)] leading-[1.1]"
                style={{ color: "var(--text)" }}
              >
                Estamos en Recoleta.
                <br />
                También donde vos estés.
              </h2>
            </div>

            <p
              className="font-inter font-light text-[15px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Atendemos en nuestro estudio de Recoleta o de forma completamente remota.
              El proceso es el mismo — ágil, ordenado, sin que tengas que moverte.
            </p>

            {/* Contact list */}
            <div className="flex flex-col gap-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-accent"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <Icon
                        size={16}
                        className="transition-colors duration-200 group-hover:text-white"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-inter font-medium text-[11px] uppercase tracking-[0.1em] mb-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-inter font-light text-[14px] leading-snug"
                        style={{ color: "var(--text)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5491156789012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] font-inter font-medium text-[13px] text-white w-fit transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1d4ed8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)")
              }
            >
              Escribinos por WhatsApp →
            </a>
          </motion.div>

          {/* ── RIGHT — Map ── */}
          <motion.div
            className="rounded-[12px] overflow-hidden"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              height: "420px",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              title="Ubicación Marchetti Estudio Contable"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895164!2d-58.39954492423258!3d-34.59679925626317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sAv.%20Santa%20Fe%202300%2C%20C1123%20CABA!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) contrast(0.95) brightness(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
