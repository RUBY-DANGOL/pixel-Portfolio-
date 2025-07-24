'use client';

import arts from '../dump/arts.json'; // Adjust the path as needed

export default function ArtGallery() {
  return (
    <section className="min-h-screen px-6 py-10 bg-white">
      <h1 className="text-4xl text-center font-bold mb-10 text-stone-700">
        ART GALLERY
      </h1>
      
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {arts.map((art, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              src={art.image}
              alt={art.alt}
              className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
