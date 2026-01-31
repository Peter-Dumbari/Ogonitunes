"use client"; // Required for using state/hooks if needed

import { FaPlay, FaDownload } from "react-icons/fa"; // Play & download icons
import Link from "next/link";

export const SongCard = ({ song }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:items-center">
      {/* Cover Image */}
      <Link href={`/song/${song.id}`}>
        <img
          src={song.cover}
          alt={song.title}
          className="w-full h-48 object-cover md:w-48 md:h-48 cursor-pointer hover:scale-105 transition-transform"
        />
      </Link>

      {/* Song Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Title & Artist */}
        <Link href={`/song/${song.id}`}>
          <div className="cursor-pointer hover:text-yellow-400 transition-colors">
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-gray-600">{song.artist}</p>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex mt-4 space-x-4">
          {/* Play Button */}
          <Link href={`/song/${song.id}`}>
            <button className="flex items-center space-x-2 px-3 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">
              <FaPlay />
              <span>Play</span>
            </button>
          </Link>

          {/* Download Button */}
          <a
            href={song.file}
            download
            className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};
