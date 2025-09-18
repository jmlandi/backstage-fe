'use client';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  /* Simple parallax effect for the scroll indicator – removed heavy JS */
  useEffect(() => {
    const handleScroll = () => {
      if (!indicatorRef.current) return;
      const y = window.scrollY;
      indicatorRef.current.style.opacity = y > 50 ? '0' : '1';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background video */}
      <iframe
        src="https://www.youtube.com/embed/xMwrhMK0MHs?start=172&end=180&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=xMwrhMK0MHs&modestbranding=1"
        title="Backstage Hero Video"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[100vw] h-[56.25vw]
          min-h-screen min-w-[177.77vh]
          pointer-events-none"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:opacity-5 hover:opacity-100 transition-all">
        <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight lg:text-7xl">
          <span className="color-backstage-orange">Entretenimento Premium</span>{' '}
          Ao Vivo
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg opacity-90">
          Somos a Backstage Productions, uma produtora especializada em eventos
          musicais que conecta artistas e público através de experiências únicas
          e memoráveis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#shows"
            className="rounded-full bg-[#df2930] border-1 border-[#df2930] px-6 py-3 font-semibold text-white transition hover:bg-black"
          >
            Ver Próximos Shows
          </a>
          <a
            href="#bio"
            className="rounded-full border-2 border-white/30 px-6 py-3 font-semibold text-white transition bg-none hover:bg-white/10"
          >
            Conheça Nossa História
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-10 flex flex-col items-center opacity-70 transition-all"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
        >
          <path
            d="M8 12l8 8 8-8"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
