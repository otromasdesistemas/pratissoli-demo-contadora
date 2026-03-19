"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Consulta gratuita",
    gain: "Entendés tu situación impositiva real sin comprometerte a nada.",
  },
  {
    num: 2,
    title: "Diagnóstico",
    gain: "Sabés exactamente qué hay que regularizar y cuánto te cuesta.",
  },
  {
    num: 3,
    title: "Inicio del trabajo",
    gain: "Todo queda organizado: vencimientos, categoría, documentación.",
  },
  {
    num: 4,
    title: "Seguimiento mensual",
    gain: "Cada mes alguien revisa que todo esté al día sin que vos tengas que acordarte.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="como-trabajo"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            Cómo trabajo
          </p>
          <h2
            className="font-playfair font-medium text-[clamp(36px,4.5vw,48px)] leading-[1.1]"
            style={{ color: "var(--text)" }}
          >
            Empezar es más fácil
            <br />
            de lo que pensás.
          </h2>
        </motion.div>

        {/* Steps — desktop horizontal / mobile vertical */}
        <div className="relative">

          {/* ── DESKTOP LAYOUT ── */}
          <div className="hidden lg:block">
            {/* Connector line track */}
            <div className="relative flex items-start gap-0">
              {/* Background track */}
              <div
                className="absolute top-[22px] left-[44px] right-[44px] h-[2px]"
                style={{ backgroundColor: "var(--border)" }}
              />
              {/* Animated fill */}
              <motion.div
                className="absolute top-[22px] left-[44px] h-[2px]"
                style={{
                  backgroundColor: "var(--accent)",
                  transformOrigin: "left",
                  right: "44px",
                }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="flex-1 flex flex-col items-center text-center px-4"
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  {/* Circle */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-inter font-medium text-[14px] text-white mb-6 relative z-10 border-4"
                    style={{
                      backgroundColor: "var(--accent)",
                      borderColor: "var(--bg)",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <h3
                    className="font-playfair font-medium text-[20px] leading-snug mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-inter font-light text-[13px] leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.gain}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── MOBILE LAYOUT ── */}
          <div className="lg:hidden flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-5 relative pb-10 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-inter font-medium text-[13px] text-white shrink-0 z-10"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <motion.div
                      className="flex-1 w-[2px] mt-2"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                      style={{
                        backgroundColor: "var(--accent)",
                        opacity: 0.25,
                        transformOrigin: "top",
                      }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="pt-1.5 pb-2">
                  <h3
                    className="font-playfair font-medium text-[20px] leading-snug mb-2"
                    style={{ color: "var(--text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-inter font-light text-[14px] leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.gain}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] font-inter font-medium text-[14px] text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)")
            }
          >
            Empezar con la consulta gratuita →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
