import React from 'react'

export const metadata = {
  title: 'About title metadeta',
}

export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>About Navbar</nav>
      <main>{children}</main>
    </div>
  )
}
