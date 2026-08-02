import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Market Connect</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Submit your ideas and connect with the market. Built with Base44.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
