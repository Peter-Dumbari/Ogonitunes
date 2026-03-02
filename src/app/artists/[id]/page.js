"use client";

import { SongCard } from "@/components/music/Card";
import { getArtistDetails } from "@/redux/features/artists/artistSlices";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ArtistDetailPage() {
  const { id } = useParams();
  const { artist, loading } = useSelector((state) => state.artists);
  // const { songs } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  // Find the artist by slug

  console.log("artist", artist);

  useEffect(() => {
    dispatch(getArtistDetails(id));
  }, [dispatch, id]);

  // Filter songs by this artist

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 space-y-8">
      {/* Artist info */}
      {loading ? (
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse" />
          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-300 animate-pulse" />
            <div className="w-24 h-3 bg-gray-300 animate-pulse" />
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-6">
            <Image
              src={artist?.artist?.image.url}
              alt={artist?.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover border"
            />

            <h1 className="text-2xl sm:text-3xl font-bold">
              {artist?.artist?.name}
            </h1>
          </div>

          <div>
            <p className="text-gray-700">{artist?.artist?.description}</p>
          </div>
        </>
      )}

      {/* Songs by artist */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Songs by {artist?.artist.name}
        </h2>

        {artist?.songs?.length === 0 ? (
          <p className="text-black">No songs released yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artist?.songs?.map((song, idx) => (
              <SongCard key={idx} song={song} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
