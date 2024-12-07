import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Movie Finder</h1>
      <div className="flex justify-center space-x-6">
        <Link
          href="/"
          className="text-lg hover:text-gray-400 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/favorites"
          className="text-lg hover:text-gray-400 transition-colors"
        >
          Favorites
        </Link>
      </div>
    </div>
  );
}
