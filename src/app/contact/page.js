"use client";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-xl font-medium text-gray-900 mb-2">Contact Us</h1>

      <p className="text-sm text-gray-600 mb-6">
        Have a question, feedback or music submission? Reach us using the form
        below.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Your name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 text-black text-sm px-4 py-2 rounded">
          Send message
        </button>
      </form>

      {/* Optional direct contact */}
      <div className="mt-8 text-sm text-gray-600">
        Or email us directly at:
        <span className="ml-1 text-gray-900 font-medium">
          info@ogonitunes.com
        </span>
      </div>
    </main>
  );
}
