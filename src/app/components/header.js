import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>Movie finder</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </div>
  );
}
