import Image from "next/image";

type EventItem = {
  date: string; // ISO yyyymmdd for sorting if needed
  day: string;
  month: string;
  image: string;
  title: string;
  location: string;
  time: string;
  price: string;
  link: string;
};

const events: EventItem[] = [
  {
    date: "20250726",
    day: "26",
    month: "JUL",
    image: "/images/djonga-novo.jpg",
    title: "Djonga - Governador Valadares",
    location: "Parque de Exposição - Governador Valadares/MG",
    time: "21:00 - 03:00",
    price: "A partir de R$ 70,00",
    link: "https://shotgun.live/pt-br/web/events/djonga-governadorvaladares",
  },
  {
    date: "20250725",
    day: "25",
    month: "JUL",
    image: "/images/nando-reis.jpg",
    title: "Nando Reis - Turnê \"Nando Hits\"",
    location: "Santos Convention Center - Santos/SP",
    time: "19:30 - 23:59",
    price: "A partir de R$ 120,00",
    link: "https://shotgun.live/pt-br/web/events/nando-reis-santos",
  },
  {
    date: "20250801",
    day: "01",
    month: "AGO",
    image: "/images/djonga-variacao.jpg",
    title: "Djonga - Belém",
    location: "Espaço Náutico Marine Club - Belém/PA",
    time: "20:00 - 02:00",
    price: "A partir de R$ 70,00",
    link: "https://shotgun.live/pt-br/web/events/djonga-belem",
  },
];

export default function EventsSection() {
  return (
    <section id="shows" className="bg-backstage-orange py-20 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">Próximos Eventos</h2>
          <p className="opacity-90">Confira nossa agenda de shows e eventos imperdíveis</p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="relative overflow-hidden rounded-2xl bg-backstage-light-gray transition ease-out hover:-translate-y-2">
              {/* Date badge */}
              <div className="absolute left-4 top-4 rounded-xl bg-backstage-orange px-3 py-1 text-center text-sm font-semibold">
                <span className="block text-lg leading-none">{event.day}</span>
                <span className="block leading-none">{event.month}</span>
              </div>
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={300}
                  className="h-full w-full object-cover transition ease-in group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="pb-2 font-black text-white border-b border-white/20">{event.title}</h3>
                <div className="pt-2 mb-6 space-y-1 text-sm text-white/80">
                  <p>
                    <strong className="font-black text-[#DF2930]">Local:</strong> {event.location}
                  </p>
                  <p>
                    <strong className="font-black text-[#DF2930]">Horário:</strong> {event.time}
                  </p>
                  <p>
                    <strong className="font-black text-[#DF2930]">Ingressos:</strong> {event.price}
                  </p>
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border-2 border-[#DF2930] bg-transparent px-6 py-2 text-sm font-semibold transition ease-in-out hover:bg-white hover:text=[#DF2930] hover:text-[#DF2930]"
                >
                  INGRESSOS
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}