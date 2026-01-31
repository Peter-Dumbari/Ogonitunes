"use client";

import { SongCard } from "@/components/music/Card";
import { artists } from "@/data/artists";
import { songs } from "@/data/song";
import { useParams } from "next/navigation";

export default function ArtistDetailPage() {
  const { slug } = useParams();

  // Find the artist by slug
  const artist = artists.find(
    (a) => a.name.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!artist) {
    return (
      <>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center text-red-500">
          Artist not found
        </div>
      </>
    );
  }

  // Filter songs by this artist
  const artistSongs = songs.filter(
    (song) => song.artist.toLowerCase() === artist.name.toLowerCase(),
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 space-y-8">
      {/* Artist info */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border mb-4">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">{artist.name}</h1>
        <p className="text-black mt-2 max-w-2xl">{artist.bio}</p>
      </div>

      {/* Songs by artist */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Songs by {artist.name}
        </h2>

        {artistSongs.length === 0 ? (
          <p className="text-black">No songs released yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artistSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
