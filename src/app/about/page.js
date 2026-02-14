export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          About Ogonitunes
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          A trusted platform for discovering and downloading quality music from
          emerging and established artists.
        </p>
      </div>

      {/* Main content */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left */}
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            Ogonitunes was created to make music discovery simple, fast and
            accessible for everyone. We focus on providing a clean experience
            where users can easily explore new songs and download music without
            unnecessary distractions.
          </p>

          <p>
            Our platform supports independent artists by giving their music a
            wider audience while offering listeners a reliable place to find
            fresh and trending tracks.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To connect listeners with great music and help upcoming artists
              reach more people through a simple and accessible platform.
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              What makes us different
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Clean and easy-to-use interface</li>
              <li>• Fast access to music downloads</li>
              <li>• Strong focus on upcoming artists</li>
              <li>• No complicated registration to start listening</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
