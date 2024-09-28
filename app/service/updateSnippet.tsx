

'use server'
import { db } from '@/app/db'
import { redirect } from 'next/navigation'


async function updateSnippet(id: number, code: string) {

  await db.snippet.update({
    where: {
      id: Number(id)
    },
    data: {
      code
    },
  })

  redirect(`/snippets/${id}`)
}

export default updateSnippet