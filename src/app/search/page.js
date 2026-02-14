export function generateMetadata({ searchParams }) {
  const q = searchParams?.q || "";

  return {
    title: q ? `Search results for ${q} | Ogonitunes` : "Search | Ogonitunes",
  };
}

export default async function SearchPage({ searchParams }) {
  const q = searchParams?.q || "";

  // your server search logic here
  // const songs = await searchSongs(q);

  return (
    <div>
      <h1>Search results for "{q}"</h1>
    </div>
  );
}
