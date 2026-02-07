// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
"use client";

import { SongCard } from "@/components/music/Card";
import { artists, musicTypes } from "@/data/artists";
import { songs } from "@/data/song";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

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
      <section className="bg-yellow-400 text-black py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Welcome to Ogonitunes
        </h1>
        <p className="text-sm sm:text-base mb-4">
          Download the latest songs from your favorite artists.
        </p>
        <button className="bg-black text-yellow-400 px-6 py-2 rounded hover:bg-gray-800 transition">
          Explore Songs
        </button>
      </section>

      {/* Search Bar */}
      <section className="max-w-6xl mx-auto px-4 pt-6 space-y-6">
        {/* ===== Artists row ===== */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-center">
            Popular Artists
          </h3>

          <div className="flex justify-center gap-4 overflow-x-auto pb-2">
            {artists.map((artist) => (
              <div key={artist.id} className="flex-shrink-0 text-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border">
                  <Link
                    href={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>

                <p className="text-xs mt-1 text-black">{artist.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 text-center">
            <Link
              href="/artists"
              className="text-sm text-yellow-600 hover:underline">
              View all artists →
            </Link>
          </div>
        </div>

        {/* ===== Music types ===== */}
        <div>
          {/* <h3 className="text-sm font-semibold mb-3">Music Type</h3> */}

          <div className="flex gap-3 overflow-x-auto">
            {musicTypes.map((type) => (
              <button
                key={type}
                className="px-4 py-2 rounded-full border text-sm
                     hover:bg-yellow-400 hover:text-black
                     transition">
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* ===== Search bar ===== */}
        <section className="max-w-6xl mx-auto px-4 pt-6 relative">
          <input
            type="text"
            placeholder="Search songs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-black p-3 rounded shadow border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Dropdown */}
          {query && filteredSongs.length > 0 && (
            <div className="absolute left-4 right-4 mt-2 bg-white border rounded-lg shadow-lg z-40">
              {filteredSongs.slice(0, 6).map((song) => (
                <Link
                  key={song.id}
                  href={`/music/${song.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 transition">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-10 h-10 rounded object-cover"
                  />

                  <div>
                    <p className="text-sm text-yellow-400 font-semibold">
                      {song.title}
                    </p>
                    <p className="text-xs text-gray-500">{song.artist}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No result */}
          {query && filteredSongs.length === 0 && (
            <div className="absolute left-4 right-4 mt-2 bg-white border rounded-lg shadow-lg z-40 p-3 text-sm text-gray-500">
              Try searching for something else.
            </div>
          )}
        </section>
      </section>

      {/* Latest Songs Grid */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Latest Songs</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
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
