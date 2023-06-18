import React from 'react'
import Link from 'next/link'
export default function Student() {
  return (
    <>
      <div>Student Page</div>
      <Link href={'/about'}>Link to About</Link>
    </>
  )
}
