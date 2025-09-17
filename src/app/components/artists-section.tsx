import Image from "next/image";

const artists = [
  { name: "Djonga", genre: "Rap/Hip Hop", region: "Brasil", image: "/images/artist-1.jpg" },
  { name: "Alceu Valença", genre: "MPB/Forró", region: "Brasil", image: "/images/artist-2.jpg" },
  { name: "Jorge Aragão", genre: "Samba/Pagode", region: "Brasil", image: "/images/artist-3.jpg" },
  { name: "Vanessa da Mata", genre: "MPB/Pop", region: "Brasil", image: "/images/artist-4.jpg" },
  { name: "Paralamas do Sucesso", genre: "Rock/Pop Rock", region: "Brasil", image: "/images/artist-5.jpg" },
  { name: "Nando Reis", genre: "MPB/Rock", region: "Brasil", image: "/images/artist-6.jpg" },
] as const;

export default function ArtistsSection() {
  return (
    <section id="booking" className="bg-backstage-light-gray py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="color-backstage-orange">Booking</span>
          </h2>
          <p className="opacity-90">Conheça os talentos que fazem parte da nossa história</p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <article key={artist.name} className="group relative h-96 overflow-hidden rounded-2xl">
              <Image src={artist.image} alt={artist.name} fill className="object-cover transition ease-out group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-backstage-orange-translucent opacity-0 transition ease-in group-hover:opacity-100">
                
                <h3 className="mb-1 text-xl font-semibold">{artist.name}</h3>
                <p className="text-sm opacity-90">{artist.genre}</p>
                <p className="text-sm opacity-90">{artist.region}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}