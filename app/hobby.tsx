'use client';

import Image from 'next/image';
import arts from '../dump/arts.json';

type Art = {
  image: string;
  alt: string;
};

export default function ArtGallery() {
  const artsData = arts as Art[];

  return (
    <section className="min-h-screen px-6 py-10 bg-white">
      <h1 className="text-4xl text-center font-bold mb-10 text-stone-700">
        ART GALLERY
      </h1>

      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {artsData.map((art, index) => (
          <div key={index} className="break-inside-avoid">
            <Image
              src={art.image}
              alt={art.alt}
              width={500} // Arbitrary, Next.js requires width/height; adjust for your images
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              unoptimized // remove if you want Next.js to optimize images
            />
          </div>
        ))}
      </div>
    </section>
  );
}
