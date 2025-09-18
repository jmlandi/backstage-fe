import React from 'react';
import Image from 'next/image';

const Footer = () => (
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
        <p className="text-[0.75rem] italic">
          Criando experiências musicais inesquecíveis
        </p>
      </div>
      <nav className="hidden md:block">
        <ul className="display flex flex-row justify-center gap-6">
          <li>
            <a
              href="#"
              className="py-2 px-5 hover:bg-white/20 transition-all rounded-xl"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#agenda"
              className="py-2 px-5 hover:bg-white/20 transition-all rounded-xl"
            >
              Agenda
            </a>
          </li>
          <li>
            <a
              href="#artistas"
              className="py-2 px-5 hover:bg-white/20 transition-all rounded-xl"
            >
              Artistas
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="py-2 px-5 hover:bg-white/20 transition-all rounded-xl"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="py-2 px-5 hover:bg-white/20 transition-all rounded-xl"
            >
              Contato
            </a>
          </li>
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

export default Footer;
