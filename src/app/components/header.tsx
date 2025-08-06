"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const links = [
    { href: "#", label: "Início" },
    { href: "#agenda", label: "Agenda" },
    { href: "#artistas", label: "Artistas" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[999] bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="#" aria-label="Backstage Productions">
          <Image src="/backstage-logo.webp" alt="Backstage Productions Logo" width={135} height={45} priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-xl px-5 py-2 transition text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="flex flex-col justify-between gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block w-[190px] px-5 py-2 text-center rounded-2xl transition text-white hover:bg-white/10 border border-white/20"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}