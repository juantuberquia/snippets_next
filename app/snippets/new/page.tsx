
"use client"

import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'
import createSnippet from '@/app/service/createSnippet'

const NewSnippet = () => {

  const [formState, action] = useFormState(createSnippet, { message: "" })

  return (
    <div className='p-5'>
      <div>
        <Link href="/" >
          Go home
        </Link>
      </div>
      <h1>Create snippet</h1>
      <form action={action}>
        <div className='flex my-4'>
          <label htmlFor="title" className='w-12'>Title</label>
          <input type="text" name='title' id='title' className='border rounded p-2 w-full' />
        </div>
        <div className='flex mb-5'>
          <label htmlFor="code" className='w-12'>Code</label>
          <input type="text" id='code' name='code' className='border rounded p-2 w-full' />
        </div>

        {
          formState.message ? <div className='my-2 p-2 bg-red-200 border rounded border-red-400'> {formState.message} </div> : null
        }

        <button type='submit' className='rounded p-2 bg-blue-200 w-full'>
          Save
        </button>
      </form>
    </div>
  )
}

export default NewSnippet