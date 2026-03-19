"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta el servicio de monotributo?",
    a: "Depende de la categoría y la frecuencia de presentaciones. En la consulta inicial te damos un presupuesto claro sin letra chica.",
  },
  {
    q: "¿Puedo cambiarme de contador en cualquier momento?",
    a: "Sí, y nosotros nos encargamos de toda la transición con tu contador anterior. Es un proceso simple que coordinamos directamente.",
  },
  {
    q: "¿Trabajás con clientes de todo el país?",
    a: "Sí. Atendemos de forma completamente remota a clientes de cualquier provincia. Todo el proceso es 100% digital.",
  },
  {
    q: "¿Qué pasa si tengo deudas con ARCA?",
    a: "Primero analizamos la situación y después te explicamos las opciones reales: planes de pago, regularizaciones, lo que corresponda en tu caso. Sin juicios ni presiones.",
  },
  {
    q: "¿Con qué frecuencia me contactás?",
    a: "Te avisamos antes de cada vencimiento y te mandamos un resumen mensual de tu situación. Vos decidís qué tan involucrado querés estar.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo una consulta de 30 minutos. Sin papelerío previo ni compromiso. Contanos tu situación y evaluamos juntos cómo ayudarte.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b"
      style={{ borderColor: "var(--border)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="font-inter font-normal text-[15px] leading-snug transition-colors duration-200 group-hover:text-accent"
          style={{ color: open ? "var(--accent)" : "var(--text)" }}
        >
          {faq.q}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: open ? "var(--accent)" : "var(--accent-light)",
            color: open ? "white" : "var(--accent)",
          }}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-inter font-light text-[14px] leading-relaxed pb-5 pr-10"
              style={{ color: "var(--text-muted)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="preguntas"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-14 lg:gap-20">

          {/* Left — sticky header */}
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              Preguntas frecuentes
            </p>
            <h2
              className="font-playfair font-medium text-[clamp(32px,4vw,48px)] leading-[1.1] mb-6"
              style={{ color: "var(--text)" }}
            >
              Las dudas
              <br />
              más comunes.
            </h2>
            <p
              className="font-inter font-light text-[15px] leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Si tu pregunta no está acá, escribinos por WhatsApp y te respondemos
              el mismo día.
            </p>
            <a
              href="https://wa.me/5491156789012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter font-medium text-[13px] transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              Hacer una pregunta por WhatsApp →
            </a>
          </motion.div>

          {/* Right — accordion */}
          <div
            className="border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
