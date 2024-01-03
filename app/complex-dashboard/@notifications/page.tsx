import Link from "next/link"

import Card from "@/app/_components/card"

export default function Notifications() {
  return (
    <div>
      <Card>
        Notifications
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </div>
  )
}
