'use client';
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, Users, Star } from 'lucide-react'; // Example icons

const stats = [
  { icon: Briefcase, value: 15, suffix: '+', label: 'Anos de experiência' },
  { icon: Calendar, value: 500, suffix: '+', label: 'Eventos realizados' },
  { icon: Users, value: 1, suffix: 'M+', label: 'Pessoas impactadas' },
  { icon: Star, value: 98, suffix: '%', label: 'Satisfação dos clientes' },
] as const;

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  /* Counter animation when in view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = Array.from(
              entry.target.querySelectorAll('[data-counter]')
            );
            elements.forEach((el) => {
              const target = parseInt(el.getAttribute('data-counter') || '0');
              const suffix = el.getAttribute('data-suffix') || '';
              let current = 0;
              const increment = Math.max(target / 100, 1);
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                el.textContent = Math.floor(current) + suffix;
              }, 20);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-backstage-dark-gray py-20">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-backstage-light-gray p-4 md:p-8 text-center transition hover:-translate-y-1"
          >
            <div className="mb-4 color-backstage-orange flex justify-center">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-backstage-dark-gray">
                <stat.icon size={32} color="#DF2930" />
              </span>
            </div>
            <div
              className="mb-2 text-4xl font-bold color-backstage-orange"
              data-counter={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </div>
            <p className="text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
