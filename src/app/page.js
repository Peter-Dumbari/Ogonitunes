// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
"use client";

import { FlatSongRow, SongCard } from "@/components/music/Card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Home() {
  const [query, setQuery] = useState("");
  const { songs } = useSelector((state) => state.songs);
  const { categories } = useSelector((state) => state.categories);
  const { artists } = useSelector((state) => state.artists);
  const router = useRouter();

  const filteredSongs =
    query.trim() === ""
      ? []
      : songs.filter((song) =>
          `${song.title} ${song.artist}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        );

  return (
    <>
      {/* Hero / Featured Section */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* soft background accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(250,204,21,0.35), transparent 60%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center gap-3">
            {/* micro label */}
            <span className="text-[11px] tracking-widest uppercase text-yellow-400">
              Ogoni Tunes
            </span>

            <h1 className="text-2xl font-semibold leading-tight">
              Vibe to the rhythm of Ogoni music!
            </h1>

            <p className="text-sm text-white/70 max-w-xs">
              Gospel, traditional and new-school Ogoni tracks.
            </p>

            <a
              href="https://wa.me/2347058894095?text=Hi%20I%20want%20to%20promote%20my%20music%20on%20OgoniTunes"
              target="_blank"
              rel="noopener noreferrer">
              <button className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold active:scale-95 transition">
                <FaWhatsapp size={18} />
                Chat to Promote
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-6xl mx-auto px-4 pt-6 space-y-7">
        {/* ===== Popular artists ===== */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-900">
              Our Trending artists
            </h3>

            <Link href="/artists" className="text-xs text-yellow-700">
              More artists
            </Link>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1">
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex-shrink-0 text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[11px] mt-1 text-gray-800 w-12 truncate">
                  {artist.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== Music categories ===== */}
        <div>
          <h3 className="text-sm font-medium text-gray-900">Genres</h3>

          <div className="flex flex-wrap gap-2">
            {categories.map((type) => (
              <button
                key={type}
                onClick={() =>
                  router.push(
                    `/categories/${type.toLowerCase().replace(/\s+/g, "-")}`,
                  )
                }
                className="
            px-3 py-1 border border-gray-300
            text-xs text-gray-800
            bg-white
          ">
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* ===== Search ===== */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search music..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
        w-full p-2.5 text-sm border border-gray-300
        rounded
        focus:outline-none
      "
          />

          {/* Results */}
          {query && filteredSongs.length > 0 && (
            <div className="absolute left-0 right-0 mt-1 border border-gray-300 bg-white z-40">
              {filteredSongs.slice(0, 6).map((song) => (
                <Link
                  key={song.id}
                  href={`/song/${song.slug}`}
                  className="flex items-center gap-2 px-2 py-2 border-b last:border-b-0 text-sm">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-8 h-8 object-cover border"
                  />

                  <div className="min-w-0">
                    <p className="truncate text-gray-900">{song.title}</p>
                    <p className="text-[11px] text-gray-500 truncate">
                      {song.artist}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No result */}
          {query && filteredSongs.length === 0 && (
            <div className="absolute left-0 right-0 mt-1 border border-gray-300 bg-white z-40 px-2 py-2 text-sm text-gray-500">
              No result found.
            </div>
          )}
        </div>
      </section>

      {/* Latest Songs Grid */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Latest Songs</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {songs.map((song) => (
            <FlatSongRow key={song.id} song={song} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Genres</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/categories/afrobeat">
            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-yellow-400 cursor-pointer transition">
              Afrobeat
            </span>
          </Link>

          <Link href="/categories/gospel">
            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-yellow-400 cursor-pointer transition">
              Hip Hop
            </span>
          </Link>
          <Link href="/categories/gospel">
            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-yellow-400 cursor-pointer transition">
              Gospel
            </span>
          </Link>
          <Link href="/categories/pop">
            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-yellow-400 cursor-pointer transition">
              Pop
            </span>
          </Link>
          <Link href="/categories/rnb">
            <span className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-yellow-400 cursor-pointer transition">
              R&B
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
