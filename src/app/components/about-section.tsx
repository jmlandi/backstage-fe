import Image from 'next/image';
import { Check } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="bio" className="bg-backstage-dark-gray py-20 text-white">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Criando <span className="color-backstage-orange">Momentos</span>{' '}
            Únicos
          </h2>
          <p className="mb-4 opacity-90">
            A Backstage Productions nasceu da paixão pela música e pela criação
            de experiências que conectam pessoas. Há mais de 15 anos,
            trabalhamos incansavelmente para transformar ideias em eventos
            memoráveis.
          </p>
          <p className="mb-8 opacity-90">
            Nossa equipe especializada cuida de cada detalhe, desde a concepção
            até a execução, garantindo que cada evento seja uma experiência
            única e inesquecível para artistas e público.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 color-backstage-orange bg-white rounded-4xl p-1" />
              <span>Produção completa de eventos</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 color-backstage-orange bg-white rounded-4xl p-1" />
              <span>Curadoria artística especializada</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 color-backstage-orange bg-white rounded-4xl p-1" />
              <span>Gestão completa de artistas</span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/backstage-hero-theater.Webp"
            alt="Equipe Backstage"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
