'use server'

import React from 'react'
import { db } from '@/app/db'
import { redirect } from 'next/navigation'

async function createSnippet(formstate: { message: string }, formData: FormData) {


  const title: any = formData.get("title")
  const code: any = formData.get("code")

  if (!title) {
    return {
      message: " title is required"
    }
  }

  if (!code) {
    return {
      message: " code is required"
    }
  }

  await db.snippet.create({
    data: {
      title,
      code
    }
  })

  redirect(`/`)

}

export default createSnippet