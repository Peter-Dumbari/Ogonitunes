"use client";

import { useParams } from "next/navigation";
import { FaDownload } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getSongBySlug } from "@/redux/features/songs/songSlices";
import { useEffect } from "react";
import Link from "next/link";

export default function SongDetailPage() {
  const params = useParams(); // get song id from URL
  const { slug } = params; // extract slug from params
  const { song, loading_song, related_songs } = useSelector(
    (state) => state.songs,
  );

  const dispatch = useDispatch();
  // Find the song from mock data

  useEffect(() => {
    dispatch(getSongBySlug(slug));
  }, [dispatch, slug]);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
      {loading_song ? (
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse" />
          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-300 animate-pulse" />
            <div className="w-24 h-3 bg-gray-300 animate-pulse" />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full mb-6">
            <img
              src={song?.image?.url}
              alt={song?.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {song?.title}
            </h1>
            <p className="text-gray-600 mb-2">{song?.artist?.name}</p>
            <p className="text-gray-500 text-sm">
              Genre: {song?.genre?.title || "Unknown"} | Size:{" "}
              {song?.size || "4MB"} | Year: {song?.year_release || "2026"}
            </p>
          </div>

          {/* Audio Player */}
          <div className="mb-6">
            <audio controls className="w-full">
              <source src={song?.audio?.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Download Button */}
          <div className="mb-6">
            <a
              href={song?.audio?.url}
              download
              className="flex items-center justify-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500 transition w-full sm:w-auto">
              <FaDownload />
              <span>Download</span>
            </a>
          </div>

          {/* ===== Related songs ===== */}
          {related_songs?.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
                  More from {song?.artist?.name}
                </h3>
              </div>

              <div className="bg-white border rounded-lg divide-y">
                {related_songs.map((item) => (
                  <Link
                    key={item._id}
                    href={`/song/${item._id}`}
                    className="flex items-center gap-3 px-3 py-3 hover:bg-gray-50 transition">
                    {/* cover */}
                    <img
                      src={item?.image?.url}
                      alt={item.title}
                      className="w-12 h-12 rounded object-cover flex-shrink-0"
                    />

                    {/* title & artist */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {item.artist?.name}
                      </p>
                    </div>

                    {/* small CTA */}
                    <span className="text-xs text-yellow-500 font-medium">
                      View
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
