import Link from "next/link"

import Card from "@/app/_components/card"

export default function ArchivedNotifications() {
  return (
    <Card>
      Archived notifications
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  )
}
