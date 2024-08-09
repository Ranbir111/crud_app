import Image from "next/image";
import Link from "next/link";
import Form from "./form/page";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full justify-center items-center">
      <h1 className="font-bold text-9xl text-blue-900">Hello World!</h1>
      <Link className="absolute top-10 rounded-md px-6 py-3 bg-blue-600 text-white font-bold" href="/form">Form</Link>
    </main>
  );
}
