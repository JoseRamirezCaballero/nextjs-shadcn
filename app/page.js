import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ModeToggle } from "@/components/ui/button-toggle-theme"
import Cardpost from "@/components/CardPost"

export default async function Home() {
  const data = await getData()
  // const post_userId = data.filter((post) => post.userId === 1)
  return (
    <div className="flex gap-2 justify-center items-center h-screen flex-wrap">
      <ModeToggle />
      <Button>Click me</Button>
      <div className="grid grid-cols-3 p-8 gap-4">
        {data.map((post) => (
          <Cardpost key={post.id} id={post.id} title={post.title} body={post.body} userId={post.userId} />
        ))}
      </div>
    </div>
  )
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  // Simular que los datos tardan...
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  return res.json()
}