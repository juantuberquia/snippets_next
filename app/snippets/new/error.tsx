"use client"
import React from 'react'

interface ErrorProps {
  error: Error,
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorProps) => {

  console.log("errro", error)
  return (
    <div>
      <p>
        sorry something went wrong
      </p>
    </div>
  )
}

export default ErrorPage
