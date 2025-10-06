import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const links = [
    { href: '#', label: 'início' },
    { href: '#shows', label: 'shows' },
    { href: '#booking', label: 'booking' },
    { href: '#bio', label: 'bio' },
    { href: '#contato', label: 'contato' },
  ];

  return (
    <div className="md:px-34 py-5 bg-backstage-dark-gray w-full bottom-0 left-0">
      <div className="w-full p-5 bg-backstage-dark-gray text-white text-center flex flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/backstage-logo.webp"
            alt="Backstage Productions Logo"
            width={150}
            height={50}
            className=""
          />
          <p className="text-[0.75rem]">entretenimento premium ao vivo</p>
        </div>
        <nav className="hidden md:block">
          <ul className="display flex flex-row justify-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition text-white hover:text-[#df2930]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-b-1 border-white/20 rounded-2xl"></div>
      <footer className="w-full text-[0.80rem] py-4 text-white/20 text-center">
        © {new Date().getFullYear()} Backstage Website. Todos os direitos
        reservados.
        <br />
        Desenvolvido por{' '}
        <a
          href="https://marcoslandi.com"
          className="underline hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marcos Landi
        </a>
        .
      </footer>
    </div>
  );
}
