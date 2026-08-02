import { useAuth } from '@/lib/AuthContext'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="outline" onClick={logout}>Logout</Button>
        </div>
        <p className="text-muted-foreground mb-4">
          Welcome{user?.name ? `, ${user.name}` : ''}!
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
    </div>
  )
}
