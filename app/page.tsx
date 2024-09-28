import FetchData from "@/components/FetchData";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" pt-6">
      <div className="flex items-center justify-items-start gap-x-4">
        <h1>home page</h1>
        <Link href="/snippets/new"> new snippet</Link>
      </div>
      <FetchData />
    </main>
  );
}
