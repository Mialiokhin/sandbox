function getRadomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default function ProductsDetailsLayout({ children }: { children: React.ReactNode }) {
  const random = getRadomInt(2)
  if (random === 1) {
    throw new Error("Error loading product")
  }

  return (
    <>
      <p>Products Details Layout</p>
      {children}
    </>
  )
}
