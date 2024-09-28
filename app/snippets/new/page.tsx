
import Link from 'next/link'
import React from 'react'
import { db } from '@/app/db'
import { redirect } from 'next/navigation'


const NewSnippet = () => {

  async function createSnippet(formData: FormData) {
    'use server'

    const title = formData.get("title") as string
    const code = formData.get("code") as string

    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    })

    redirect(`/`)
  }

  return (
    <div className='p-5'>
      <div>
        <Link href="/" >
          Go home
        </Link>
      </div>
      <h1>Create snippet</h1>
      <form action={createSnippet}>
        <div className='flex my-4'>
          <label htmlFor="title" className='w-12'>Title</label>
          <input type="text" name='title' id='title' className='border rounded p-2 w-full' />
        </div>
        <div className='flex mb-5'>
          <label htmlFor="code" className='w-12'>Code</label>
          <input type="text" id='code' name='code' className='border rounded p-2 w-full' />
        </div>
        <button type='submit' className='rounded p-2 bg-blue-200 w-full'>
          Save
        </button>
      </form>
    </div>
  )
}

export default NewSnippet