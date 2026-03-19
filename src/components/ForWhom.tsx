"use client";

import { motion } from "framer-motion";
import { Laptop, Store, Stethoscope } from "lucide-react";

const cards = [
  {
    icon: Laptop,
    title: "Freelancer o independiente",
    body: "Tenés ingresos variables, no sabés en qué categoría estás y cada vez que se acerca el vencimiento aparece la angustia.",
    color: "var(--accent)",
    bg: "var(--accent-light)",
  },
  {
    icon: Store,
    title: "Comercio o PYME",
    body: "Tenés empleados, facturas, proveedores — y necesitás que alguien de confianza te diga cómo está el negocio de verdad.",
    color: "var(--gold)",
    bg: "#FEF9EC",
  },
  {
    icon: Stethoscope,
    title: "Profesional independiente",
    body: "Médico, abogado, arquitecto — ejercés tu profesión y querés que alguien se ocupe de lo impositivo sin darte más trabajo.",
    color: "var(--accent)",
    bg: "var(--accent-light)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ForWhom() {
  return (
    <section
      id="para-quien"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-playfair font-medium text-[clamp(36px,4.5vw,52px)] leading-[1.1] mb-4"
            style={{ color: "var(--text)" }}
          >
            ¿Esto te suena familiar?
          </h2>
          <p
            className="font-inter font-light text-[17px]"
            style={{ color: "var(--text-muted)" }}
          >
            Trabajamos con personas que quieren ordenarse de una vez.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="rounded-[12px] p-8 flex flex-col gap-5 group transition-shadow duration-300 hover:shadow-md"
                style={{
                  backgroundColor: "var(--white)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: card.bg }}
                >
                  <Icon size={20} style={{ color: card.color }} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h3
                    className="font-playfair font-medium text-[21px] leading-snug"
                    style={{ color: "var(--text)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="font-inter font-light text-[14px] leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {card.body}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="mt-auto h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: card.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing line */}
        <motion.p
          className="text-center mt-14 font-playfair italic text-[20px]"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          "Si te identificaste con alguno, estamos para ayudarte."
        </motion.p>
      </div>
    </section>
  );
}
