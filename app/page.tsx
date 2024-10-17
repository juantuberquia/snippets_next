import FetchData from "@/components/FetchData";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" pt-6">
      <div className="flex items-center justify-items-start gap-x-4">
        <Link href="/snippets/new" className="bg-slate-300 text-black px-4 py-2 rounded-md hover:bg-slate-400"> New snippet</Link>
      </div>
      <FetchData />
    </main>
  );
}
