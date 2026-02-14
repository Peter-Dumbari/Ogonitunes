"use client";

import Link from "next/link";

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
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Genres of Music
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            href={`/categories/${category.slug}`}
            key={category.slug}
            className="block bg-yellow-400 text-black font-semibold text-center py-8 rounded-lg shadow hover:bg-yellow-500 transition">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
