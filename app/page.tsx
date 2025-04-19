import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/auth/login">login</Link>
      <Link href="/auth/registro">registro</Link>
    </div>
  );
}
