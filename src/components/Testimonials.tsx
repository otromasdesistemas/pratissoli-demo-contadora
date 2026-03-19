"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    quote:
      "Antes vivía con el miedo de que me cayera una multa. Ahora sé que todo está en orden y me avisan antes de cada vencimiento.",
    name: "Tomás R.",
    role: "Diseñador freelance",
    initials: "TR",
    color: "#2563EB",
  },
  {
    stars: 5,
    quote:
      "Nos ayudó a regularizar dos años de deuda con ARCA y ahora llevamos la contabilidad del local sin dramas.",
    name: "Luciana y Marcos V.",
    role: "Dueños de local gastronómico, Palermo",
    initials: "LM",
    color: "#B08D57",
  },
  {
    stars: 5,
    quote:
      "Como médica nunca entendí de impuestos. Sofía me lo explica simple y sé exactamente qué pago y por qué.",
    name: "Dra. Carolina F.",
    role: "Médica independiente",
    initials: "CF",
    color: "#6366f1",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            Testimonios
          </p>
          <h2
            className="font-playfair font-medium text-[clamp(34px,4.5vw,48px)] leading-[1.1]"
            style={{ color: "var(--text)" }}
          >
            Lo que dicen nuestros clientes.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="rounded-[12px] p-7 flex flex-col gap-5 border"
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#F59E0B"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-inter font-light text-[15px] leading-relaxed flex-1"
                style={{ color: "var(--text)" }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t" style={{ borderColor: "var(--border)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-inter font-medium text-[12px] text-white shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-inter font-medium text-[13px]"
                    style={{ color: "var(--text)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-inter font-light text-[12px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
