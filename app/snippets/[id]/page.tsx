import { db } from '../../../app/db';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ id: "firts" }, { id: "second" }]
}

const page = async ({ params }: any) => {

  await new Promise((r) => (setTimeout(r, 500)))

  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) }
  })

  return (
    <div className='flex justify-between gap-x-5 max-w-96 pt-8'>
      <div className='gap-x-2 flex'>
        <p className='font-semibold'>
          Name snippet:
          <span className='font-normal'> {snippet?.title}</span>
        </p>
        <p className='font-semibold'>
          Code snippet:
          <span className='font-normal'> {snippet?.code}</span>
        </p>
      </div>
      <div className='flex gap-x-4 items-start'>
        <Link href={`/snippets/${params.id}/edit`}>

          <button className='bg-slate-300 text-black px-4 py-2 rounded-md hover:bg-slate-400'>edit</button>
        </Link>
        <button className='bg-slate-300 text-black px-4 py-2 rounded-md hover:bg-slate-400'>delete </button>
      </div>
    </div>
  )
}

export default page