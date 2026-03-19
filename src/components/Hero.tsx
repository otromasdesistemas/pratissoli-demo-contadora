"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, CreditCard, ChevronDown } from "lucide-react";

// Animated headline line — clips from bottom
function HeadlineLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </div>
  );
}

// Floating dashboard card
function DashboardCard() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      className="relative z-10 bg-white rounded-2xl p-6 w-full max-w-sm mx-auto"
      style={{
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)",
      }}
    >
      {/* Card header */}
      <div
        className="flex items-center justify-between mb-5 pb-4 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <p
            className="font-inter font-medium text-[11px] uppercase tracking-[0.15em]"
            style={{ color: "var(--text-muted)" }}
          >
            Estado de tu estudio
          </p>
          <p
            className="font-playfair font-medium text-[17px] mt-0.5"
            style={{ color: "var(--text)" }}
          >
            Marzo 2026
          </p>
        </div>
        <span
          className="text-[10px] font-inter font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: "var(--accent-light)",
            color: "var(--accent)",
          }}
        >
          Al día ✓
        </span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "var(--accent-light)" }}
          >
            <CheckCircle2 size={17} style={{ color: "var(--accent)" }} />
          </div>
          <div className="flex-1">
            <p
              className="font-inter font-medium text-[13px]"
              style={{ color: "var(--text)" }}
            >
              Declaraciones al día
            </p>
            <p
              className="font-inter font-light text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              Todas presentadas en tiempo y forma
            </p>
          </div>
          <CheckCircle2
            size={16}
            className="shrink-0"
            style={{ color: "#22c55e" }}
          />
        </div>

        {/* Row 2 */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#FEF9EC" }}
          >
            <Calendar size={17} style={{ color: "var(--gold)" }} />
          </div>
          <div className="flex-1">
            <p
              className="font-inter font-medium text-[13px]"
              style={{ color: "var(--text)" }}
            >
              Próximo vencimiento
            </p>
            <p
              className="font-inter font-light text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              20 de marzo · IVA mensual
            </p>
          </div>
          <span
            className="font-inter font-medium text-[11px] px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#FEF9EC", color: "var(--gold)" }}
          >
            3 días
          </span>
        </div>

        {/* Row 3 */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: "var(--accent-light)" }}
          >
            <CreditCard size={17} style={{ color: "var(--accent)" }} />
          </div>
          <div className="flex-1">
            <p
              className="font-inter font-medium text-[13px]"
              style={{ color: "var(--text)" }}
            >
              Monotributo — Categoría H
            </p>
            <p
              className="font-inter font-light text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              Pago del mes confirmado
            </p>
          </div>
          <CheckCircle2
            size={16}
            className="shrink-0"
            style={{ color: "#22c55e" }}
          />
        </div>
      </div>

      {/* Footer row */}
      <div
        className="mt-5 pt-4 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="font-inter font-light text-[11px]"
          style={{ color: "var(--text-muted)" }}
        >
          Actualizado hoy a las 9:15 AM
        </p>
        <div className="flex -space-x-1.5">
          {["#2563EB", "#B08D57", "#22c55e"].map((c, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-white"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const next = document.querySelector("#para-quien");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex"
            >
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-inter font-medium text-[12px]"
                style={{
                  backgroundColor: "var(--accent-light)",
                  color: "var(--accent)",
                }}
              >
                ✦ Turnos disponibles esta semana
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-playfair font-medium leading-[1.08] text-[clamp(38px,5.5vw,64px)]"
              style={{ color: "var(--text)" }}
            >
              <HeadlineLine delay={0.2}>Que ARCA no sea</HeadlineLine>
              <HeadlineLine delay={0.32}>tu problema.</HeadlineLine>
              <HeadlineLine delay={0.44}>
                <span style={{ color: "var(--accent)" }}>Es el nuestro.</span>
              </HeadlineLine>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="font-inter font-light text-[18px] leading-relaxed max-w-[480px]"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
            >
              Llevamos la contabilidad de autónomos y PYMES en Buenos Aires.
              Declaraciones, sueldos, monotributo — todo resuelto a tiempo,{" "}
              <span style={{ color: "var(--text)" }} className="font-normal">
                sin sorpresas.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] font-inter font-medium text-[15px] text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--accent)" }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLAnchorElement
                  ).style.backgroundColor = "#1d4ed8")
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLAnchorElement
                  ).style.backgroundColor = "var(--accent)")
                }
              >
                Quiero una consulta gratuita →
              </a>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#servicios")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 font-inter font-normal text-[14px] transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                Ver servicios
                <ChevronDown size={15} />
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {[
                  { bg: "#2563EB", initials: "TR" },
                  { bg: "#B08D57", initials: "LV" },
                  { bg: "#6366f1", initials: "CF" },
                  { bg: "#22c55e", initials: "MA" },
                ].map((av, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-inter font-medium text-[10px]"
                    style={{ backgroundColor: av.bg, zIndex: 4 - i }}
                  >
                    {av.initials}
                  </div>
                ))}
                <div
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-inter font-medium text-[9px]"
                  style={{
                    backgroundColor: "var(--bg-2)",
                    color: "var(--text-muted)",
                    zIndex: 0,
                  }}
                >
                  +146
                </div>
              </div>
              <p
                className="font-inter font-light text-[13px] leading-snug"
                style={{ color: "var(--text-muted)" }}
              >
                Más de 150 clientes confían en nosotros
                <span
                  className="mx-2 opacity-30"
                  style={{ color: "var(--text)" }}
                >
                  ·
                </span>
                12 años de experiencia
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative blob */}
            <div
              className="absolute w-[340px] h-[340px] rounded-full opacity-60 blur-3xl pointer-events-none"
              style={{
                backgroundColor: "var(--accent-light)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Second decorative circle */}
            <div
              className="absolute w-[200px] h-[200px] rounded-full opacity-40 blur-2xl pointer-events-none"
              style={{
                backgroundColor: "#FEF9EC",
                bottom: "-20px",
                right: "0px",
              }}
            />

            <DashboardCard />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll hacia abajo"
      >
        <span
          className="font-inter font-light text-[11px] uppercase tracking-[0.15em]"
          style={{ color: "var(--text-muted)" }}
        >
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: "var(--text-muted)" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
