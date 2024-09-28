
"use client"

import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import updateSnippet from '@/app/service/updateSnippet'

export const ShowSnippet = ({
  snippet, params
}: any) => {

  const [code, setCode] = useState("")
  const handleChange = (value: any) => {
    setCode(value)
  }

  return (
    <form action={() => updateSnippet(Number(params), code)}>
      <Editor height="40vh" width="50vw" defaultLanguage="javascript" theme='vs-dark' defaultValue={snippet.code} onChange={handleChange} />
      <button type='submit'> Editar</button>
    </form>
  )
}
