"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData.entries()));

    // TODO: integrate with API / email service
    await new Promise((r) => setTimeout(r, 1200));

    setStatus("success");
    e.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <section id="contato" className="bg-backstage-light-gray py-20 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Vamos Criar Algo <span className="text-backstage-orange">Incrível</span> Juntos
          </h2>
          <p className="opacity-90">Entre em contato e vamos transformar sua ideia em realidade</p>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <ContactItem
              icon={MapPin}
              title="Endereço"
              text={"Rua dos Artistas, 456\nVila Madalena - São Paulo/SP"}
            />
            <ContactItem icon={Phone} title="Telefone" text="+55 (11) 9 9999-7777" />
            <ContactItem icon={Mail} title="Email" text="contato@backstageproductions.com.br" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Seu nome"
              className="block w-full rounded-lg border-2 border-[#333] bg-backstage-dark-gray p-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              className="block w-full rounded-lg border-2 border-[#333] bg-backstage-dark-gray p-4"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              className="block w-full rounded-lg border-2 border-[#333] bg-backstage-dark-gray p-4"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Sua mensagem"
              className="block w-full rounded-lg border-2 border-[#333] bg-backstage-dark-gray p-4"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-[#DF2930] px-6 py-3 font-semibold text-white transition-all ease-out hover:cursor-pointer hover:bg-white hover:text-[#DF2930] disabled:opacity-50"
            >
              {status === "loading"
                ? "Enviando..."
                : status === "success"
                ? "Mensagem enviada!"
                : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Helper component for contact info */
function ContactItem({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="mt-1 h-10 w-10 flex-shrink-0 bg-backstage-orange rounded-4xl p-2" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="whitespace-pre-line opacity-90">{text}</p>
      </div>
    </div>
  );
}