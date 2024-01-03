import React from "react"

import Link from "next/link"

// eslint-disable-next-line no-restricted-imports

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  )
}
