"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { prefix: "+", value: 150, suffix: "", label: "Clientes activos" },
  { prefix: "",  value: 12,  suffix: "", label: "Años de experiencia" },
  { prefix: "+", value: 2000, suffix: "", label: "Declaraciones presentadas" },
  { prefix: "",  value: 98,  suffix: "%", label: "Clientes que renuevan" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const count = useCounter(stat.value, 1500, active);

  return (
    <motion.div
      className="flex flex-col items-center gap-3 px-8 py-10 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Vertical divider — not on first item */}
      {index > 0 && (
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        />
      )}

      <p
        className="font-playfair font-medium text-[clamp(48px,5vw,64px)] leading-none"
        style={{ color: "var(--gold)" }}
      >
        {stat.prefix}
        {count.toLocaleString("es-AR")}
        {stat.suffix}
      </p>
      <p
        className="font-inter font-light text-[11px] uppercase tracking-[0.15em] text-center"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-4"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={isInView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
