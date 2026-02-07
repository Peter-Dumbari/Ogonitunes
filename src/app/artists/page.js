"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function ArtistsPage() {
  const { artists } = useSelector((state) => state.artists);
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Popular Artists
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <Link
            href={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={artist.id}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform">
            <div className="w-24 h-24 rounded-full overflow-hidden border">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-2 font-semibold text-black">{artist.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
