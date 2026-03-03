"use client"; // Required for using state/hooks if needed

import { FaPlay, FaDownload } from "react-icons/fa"; // Play & download icons
import Link from "next/link";
import Image from "next/image";

export const SongCard = ({ song }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:items-center">
      {/* Cover Image */}
      <Link href={`/song/${song.slug}`}>
        <Image
          src={song.image?.url}
          alt={song.title}
          width={50}
          height={50}
          loading="lazy"
          className="w-full h-48 object-cover md:w-48 md:h-48 cursor-pointer hover:scale-105 transition-transform"
        />
      </Link>

      {/* Song Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Title & Artist */}
        <Link href={`/song/${song.slug}`}>
          <div className="cursor-pointer hover:text-yellow-400 transition-colors">
            <h3 className="text-lg text-black font-semibold">{song.title}</h3>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex mt-4 space-x-4">
          {/* Play Button */}

          <audio controls className="w-full">
            <source src={song?.audio?.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Download Button */}
          <a
            href={`${BASE_URL}/song/${song?._id}/download`}
            download={`${song?.title} - ${song?.artist?.name} | ogonitunes.com`}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const FlatSongRow = ({ song }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="border-b border-gray-200 py-2">
      <div className="flex items-center gap-3">
        {/* small cover */}
        <Link href={`/song/${song.slug}`}>
          <Image
            src={song.image.url}
            height={10}
            width={10}
            loading="lazy"
            alt={song.title}
            className="w-10 h-10 object-cover border rounded"
          />
        </Link>

        {/* title & artist */}
        <div className="flex-1 min-w-0">
          <Link href={`/song/${song.slug}`}>
            <p className="text-sm text-black-900 truncate">{song.title}</p>
          </Link>

          <p className="text-[11px] text-black truncate">{song.artist.name}</p>
        </div>

        {/* download */}
        <a
          href={`${BASE_URL}/song/${song?._id}/download`}
          download={`${song?.title} - ${song?.artist?.name} | ogonitunes.com`}
          className="text-xs text-yellow-700 font-medium whitespace-nowrap">
          Download
        </a>
      </div>
    </div>
  );
};
