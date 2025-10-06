import Image from 'next/image';

type EventItem = {
  date: string; // ISO yyyymmdd for sorting if needed
  day: string;
  month: string;
  image: string;
  title: string;
  location: string;
  city: string;
  time: string;
  price: string;
  link: string;
};

const events: EventItem[] = [
  {
    date: '20250726',
    day: '26',
    month: 'julho',
    image: '/images/djonga-novo.jpg',
    title: 'djonga',
    location: 'Parque de Exposição',
    city: 'governador valadares',
    time: '21h',
    price: 'A partir de R$ 70,00',
    link: 'https://shotgun.live/pt-br/web/events/djonga-governadorvaladares',
  },
  {
    date: '20250725',
    day: '25',
    month: 'julho',
    image: '/images/nando-reis.jpg',
    title: 'nando reis',
    location: 'Santos Convention Center',
    city: 'santos',
    time: '19h30min',
    price: 'A partir de R$ 120,00',
    link: 'https://shotgun.live/pt-br/web/events/nando-reis-santos',
  },
  {
    date: '20250801',
    day: '01',
    month: 'agosto',
    image: '/images/djonga-variacao.jpg',
    title: 'djonga',
    location: 'Espaço Náutico Marine Club',
    city: 'belém',
    time: '20h',
    price: 'A partir de R$ 70,00',
    link: 'https://shotgun.live/pt-br/web/events/djonga-belem',
  },
];

export default function EventsSection() {
  return (
    <section id="shows" className="bg-backstage-orange py-20 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <header className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">próximos eventos</h2>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="relative overflow-hidden rounded-xl bg-backstage-light-gray transition ease-out hover:-translate-y-2"
            >
              {/* Date badge */}
              <div className="absolute left-4 top-4 rounded-xl bg-[#cb0000] px-3 py-1 text-start text-sm font-semibold">
                <span className="block text-lg leading-none">{event.day}</span>
                <span className="block leading-none">{event.month}</span>
              </div>
              {/* Image */}
              <div className="h-64 w-full overflow-hidden">
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
                <h3 className="pb-3 text-sm font-bold text-[#fdf9ed] border-b border-[#fdf9ed]/20">
                  {event.title}
                </h3>
                <div className="pt-3 mb-6 space-y-2 text-xs text-[#fdf9ed]/90">
                  <p className="font-bold text-[#fdf9ed]">{event.city}</p>
                  <p className="font-medium">{event.location}</p>
                  <p className="font-medium">
                    {event.day} {event.month} {' às '} {event.time}
                  </p>
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl border-2 border-[#cb0000] bg-transparent px-6 py-2 text-sm font-bold transition ease-in-out hover:bg-[#fdf9ed] hover:text-[#cb0000] mt-2"
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
