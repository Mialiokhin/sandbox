"use client"

import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout() {
  const pathname = usePathname()
  const [input, setInput] = useState("")

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link href={link.href} key={link.name} className={isActive ? "text-3xl font-bold underline" : "text-2xl"}>
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
