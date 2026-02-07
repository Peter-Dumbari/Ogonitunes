"use client";

import { useParams } from "next/navigation";
import { FaDownload } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SongDetailPage() {
  const params = useParams(); // get song id from URL
  const songId = parseInt(params.id);
  const { songs } = useSelector((state) => state.songs);

  // Find the song from mock data
  const song = songs.find((s) => s.id === songId);

  if (!song) {
    return (
      <>
        <Navbar />
        <div className="pt-16 text-center text-gray-500">Song not found.</div>
        <Footer />
      </>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      {/* Song Cover */}
      <div className="w-full mb-6">
        <img
          src={song.cover}
          alt={song.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Song Info */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{song.title}</h1>
        <p className="text-gray-600 mb-2">{song.artist}</p>
        <p className="text-gray-500 text-sm">
          Genre: {song.genre || "Unknown"} | Size: {song.size || "4MB"} | Year:{" "}
          {song.year || "2026"}
        </p>
      </div>

      {/* Audio Player */}
      <div className="mb-6">
        <audio controls className="w-full">
          <source src={song.file} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Download Button */}
      <div className="mb-6">
        <a
          href={song.file}
          download
          className="flex items-center justify-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition w-full sm:w-auto">
          <FaDownload />
          <span>Download</span>
        </a>
      </div>

      {/* Optional: Related Songs */}
      {/* Can add a section here later */}
    </div>
  );
}
