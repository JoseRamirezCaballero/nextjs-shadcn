import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/button-toggle-theme"

export default function Home() {
  return (
    <div className="flex gap-2 justify-center items-center h-screen">
      <ModeToggle />
      <Button>Click me</Button>
    </div>
  )
}
