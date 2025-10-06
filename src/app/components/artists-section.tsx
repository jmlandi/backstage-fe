import Image from 'next/image';

const artists = [
  {
    name: 'Djonga',
    genre: 'Rap/Hip Hop',
    region: 'Brasil',
    image: '/images/artist-1.jpg',
  },
  {
    name: 'Alceu Valença',
    genre: 'MPB/Forró',
    region: 'Brasil',
    image: '/images/artist-2.jpg',
  },
  {
    name: 'Jorge Aragão',
    genre: 'Samba/Pagode',
    region: 'Brasil',
    image: '/images/artist-3.jpg',
  },
  {
    name: 'Vanessa da Mata',
    genre: 'MPB/Pop',
    region: 'Brasil',
    image: '/images/artist-4.jpg',
  },
  {
    name: 'Paralamas do Sucesso',
    genre: 'Rock/Pop Rock',
    region: 'Brasil',
    image: '/images/artist-5.jpg',
  },
  {
    name: 'Nando Reis',
    genre: 'MPB/Rock',
    region: 'Brasil',
    image: '/images/artist-6.jpg',
  },
] as const;

export default function ArtistsSection() {
  return (
    <section id="booking" className="bg-backstage-light-gray py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="text-[#cb0000]">booking</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="group relative h-96 overflow-hidden rounded-xl"
            >
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover transition ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#cb0000d9] opacity-0 transition ease-in group-hover:opacity-100">
                <h3 className="text-sm font-bold text-[#fdf9ed]">
                  {artist.name.toLowerCase()}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
