import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Hello World</div>
      <Link href="/about">Link to About Page</Link>
      <Link href="/users">Users</Link>
    </main>
  );
}
