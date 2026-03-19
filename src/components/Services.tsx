"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  UserCheck,
  Users,
  BarChart3,
  FileText,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    num: "01",
    name: "Monotributo",
    desc: "Alta, categorización, recategorización y bajas. Sin papeles perdidos.",
    icon: RefreshCw,
  },
  {
    num: "02",
    name: "Autónomos",
    desc: "Aportes, declaraciones juradas y régimen general al día.",
    icon: UserCheck,
  },
  {
    num: "03",
    name: "Liquidación de sueldos",
    desc: "Para empleadores con personal en relación de dependencia.",
    icon: Users,
  },
  {
    num: "04",
    name: "Contabilidad PYME",
    desc: "Balance, libros contables e informes mensuales claros.",
    icon: BarChart3,
  },
  {
    num: "05",
    name: "Facturación electrónica",
    desc: "Configuración, asesoría y seguimiento de tu sistema de facturación.",
    icon: FileText,
  },
  {
    num: "06",
    name: "Atención de inspecciones",
    desc: "Representación ante ARCA, ARBA e inspecciones laborales.",
    icon: ShieldAlert,
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            Servicios
          </p>
          <h2
            className="font-playfair font-medium text-[clamp(36px,4.5vw,48px)] leading-[1.1]"
            style={{ color: "var(--text)" }}
          >
            Todo lo que necesitás,
            <br />
            sin vueltas.
          </h2>
        </motion.div>

        {/* Service list */}
        <div
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.num}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative flex items-center gap-6 py-6 border-b cursor-default overflow-hidden"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Hover background slide */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    backgroundColor: "var(--accent-light)",
                    transformOrigin: "left",
                  }}
                />

                {/* Number */}
                <span
                  className="relative font-inter font-medium text-[12px] w-8 shrink-0"
                  style={{ color: "var(--gold)" }}
                >
                  {svc.num}
                </span>

                {/* Text */}
                <div className="relative flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <h3
                    className="font-playfair font-normal text-[22px] sm:text-[24px] leading-snug sm:w-56 shrink-0"
                    style={{ color: "var(--text)" }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className="font-inter font-light text-[14px] leading-snug"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {svc.desc}
                  </p>
                </div>

                {/* Icon right */}
                <div className="relative flex items-center gap-2 shrink-0">
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--accent)" }}
                  />
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] font-inter font-medium text-[13px] text-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)")
            }
          >
            Consultar por un servicio →
          </a>
          <p
            className="font-inter font-light text-[13px]"
            style={{ color: "var(--text-muted)" }}
          >
            Primera consulta sin cargo · Sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
