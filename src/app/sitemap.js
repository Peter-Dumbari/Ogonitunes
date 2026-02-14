export default async function sitemap() {
  const songs = await getAllSongs();

  return songs.map((song) => ({
    url: `https://ogonitunes.com/song/${song.slug}`,
    lastModified: new Date(),
  }));
}
