
'use server'
import { db } from '@/app/db'
import { redirect } from 'next/navigation'


async function deleteSnippet(id: number) {

  await db.snippet.delete({
    where: {
      id: Number(id)
    }
  })

  redirect(`/snippets/${id}`)
}

export default deleteSnippet