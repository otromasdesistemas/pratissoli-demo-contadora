"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Clock } from "lucide-react";
import Image from "next/image";

const credentials = [
  { icon: GraduationCap, text: "Licenciada en Contabilidad — UBA, Facultad de Ciencias Económicas" },
  { icon: BadgeCheck,    text: "Matrícula CPCE CABA Nº 28.741 · Habilitada desde 2013" },
  { icon: Clock,         text: "12 años atendiendo autónomos y PYMES en Argentina" },
];

export default function About() {
  return (
    <section
      id="sobre-sofia"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT — Photo placeholder ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative offset block */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-[12px] z-0"
              style={{ backgroundColor: "var(--accent-light)" }}
            />

            {/* Photo frame */}
            <div
              className="relative z-10 rounded-[12px] overflow-hidden aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0"
              style={{ backgroundColor: "var(--bg-2)" }}
            >
              <Image
                src="/images/perfil-contadora.jpg"
                alt="Cra. Sofía Marchetti — Contadora Pública"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />

              {/* Subtle gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(238,236,234,0.6) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 lg:-right-8 z-20 bg-white rounded-[10px] px-4 py-3 flex items-center gap-3"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-inter font-medium text-[13px]"
                style={{ backgroundColor: "var(--accent)" }}
              >
                ✓
              </div>
              <div>
                <p
                  className="font-inter font-medium text-[12px]"
                  style={{ color: "var(--text)" }}
                >
                  12 años de experiencia
                </p>
                <p
                  className="font-inter font-light text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Matriculada CPCE CABA
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Content ── */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <p
              className="font-inter font-medium text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Sobre Sofía
            </p>

            {/* Headline */}
            <h2
              className="font-playfair font-light text-[clamp(30px,3.8vw,44px)] leading-[1.15]"
              style={{ color: "var(--text)" }}
            >
              Contadora porque los números,
              bien leídos, cuentan la verdad.
            </h2>

            {/* Bio */}
            <div className="flex flex-col gap-4">
              <p
                className="font-inter font-light text-[16px] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Egresé de la UBA en 2013 y desde entonces trabajo exclusivamente con autónomos,
                monotributistas y pequeñas empresas. Me especialicé en el régimen impositivo
                argentino porque es el más cambiante y el que más confusión genera entre los
                que trabajan por su cuenta.
              </p>
              <p
                className="font-inter font-light text-[16px] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Respondo mensajes el mismo día. Aviso antes de cada vencimiento. Y si algo
                cambia en ARCA, te lo explico en criollo —sin tecnicismos— para que puedas
                tomar decisiones informadas sobre tu negocio o tu trabajo.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="pl-5 py-1 font-inter font-light text-[15px] leading-relaxed italic"
              style={{
                borderLeft: "3px solid var(--gold)",
                color: "var(--text)",
              }}
            >
              "Un cliente ordenado duerme mejor. Mi trabajo es que llegues a fin de mes
              sin sorpresas de ARCA."
            </blockquote>

            {/* Credentials */}
            <div className="flex flex-col gap-3 pt-2">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div key={cred.text} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <Icon size={14} style={{ color: "var(--accent)" }} />
                    </div>
                    <p
                      className="font-inter font-light text-[13px] leading-snug pt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {cred.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
