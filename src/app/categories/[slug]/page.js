"use client";

import { SongCard } from "@/components/music/Card";
import { songs } from "@/data/song";
import { useParams } from "next/navigation";

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = params.slug; // get the category slug from URL

  // Filter songs by category
  const categorySongs = songs.filter(
    (song) => song.genre?.toLowerCase() === slug,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center capitalize">
        {slug} Songs
      </h1>

      {categorySongs.length === 0 ? (
        <p className="text-center text-gray-500">
          No songs available in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categorySongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}
