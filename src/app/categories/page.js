"use client";

import { fetchCategories } from "@/redux/features/categories/categorySlices";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Sample categories
const categories = [
  { name: "Afrobeat", slug: "afrobeat" },
  { name: "Hip Hop", slug: "hip-hop" },
  { name: "Gospel", slug: "gospel" },
  { name: "Pop", slug: "pop" },
  { name: "R&B", slug: "rnb" },
  { name: "Highlife", slug: "highlife" },
];

export default function CategoriesPage() {
  const { genres, loading_genre } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Genres of Music
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading_genre ? (
          <div className="col-span-full flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
            <div className="w-32 h-4 bg-gray-300 animate-pulse" />
          </div>
        ) : (
          genres.map((category) => (
            <Link
              href={`/categories/${category?.title?.toLowerCase().replace(/\s+/g, "-")}`}
              key={category._id}
              className="block bg-yellow-400 text-black font-semibold text-center py-8 rounded-lg shadow hover:bg-yellow-500 transition">
              {category.title}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
