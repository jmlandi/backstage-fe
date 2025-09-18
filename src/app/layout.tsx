import type { Metadata } from 'next';
import Footer from './components/footer';
import Header from './components/header';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Backstage Productions | Especialistas em Produção e Gestão de Eventos',
  description:
    'A Backstage Productions é especializada em produção profissional de eventos, gestão e soluções criativas para shows, eventos corporativos e festivais. Eleve a experiência do seu evento com nossa equipe de especialistas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
