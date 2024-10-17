
'use server'
import { db } from '@/app/db'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

async function deleteSnippet(id: number) {

  await db.snippet.delete({
    where: {
      id: Number(id)
    }
  })

  // revalidatePath("/")
  redirect(`/`)
}

export default deleteSnippet