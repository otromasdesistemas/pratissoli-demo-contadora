"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Preguntas", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        animate={{
          boxShadow: scrolled
            ? "0 1px 0 0 var(--border), 0 2px 8px rgba(0,0,0,0.06)"
            : "0 1px 0 0 transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-baseline gap-1.5 shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className="font-playfair font-medium text-[22px] leading-none"
              style={{ color: "var(--text)" }}
            >
              Marchetti
            </span>
            <span
              className="text-[22px] leading-none font-medium"
              style={{ color: "var(--gold)" }}
            >
              ·
            </span>
            <span
              className="font-inter font-light text-[13px] leading-none"
              style={{ color: "var(--text-muted)" }}
            >
              Estudio Contable
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-inter font-normal text-[13px] transition-colors duration-200 hover:text-accent"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contacto");
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-[6px] font-inter font-medium text-[13px] text-white transition-colors duration-200"
              style={{ backgroundColor: "var(--accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#1d4ed8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent)")
              }
            >
              Consultá gratis →
            </a>

            <button
              className="md:hidden p-2 rounded-md"
              style={{ color: "var(--text)" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 h-16 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-playfair font-medium text-[18px]"
                  style={{ color: "var(--text)" }}
                >
                  Marchetti
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-md"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="font-inter font-normal text-[16px] transition-colors duration-200"
                      style={{ color: "var(--text)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <div className="px-6 pb-8">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contacto");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-[6px] font-inter font-medium text-[14px] text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Consultá gratis →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
