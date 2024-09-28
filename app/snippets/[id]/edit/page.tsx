import { db } from '../../../db';
import { notFound } from 'next/navigation';
import { ShowSnippet } from '@/components/ShowSnippet';

const EditSnippet = async ({ params }: any) => {

  const id = Number(params.id)
  const snippet = await db.snippet.findFirst({
    where: { id }
  })

  if (!snippet) notFound()



  return (
    <div className="pt-10 pl-10">
      <p> Editing  snippet with id {params.id}</p>
      <ShowSnippet snippet={snippet} params={params.id} />
    </div>
  )
}

export default EditSnippet