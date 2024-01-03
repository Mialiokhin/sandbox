"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {
  const router = useRouter()
  const handleOrder = () => {
    router.push("/")
  }

  return (
    <>
      <h1>Order product </h1>
      <button onClick={handleOrder}>Place order</button>
    </>
  )
}
