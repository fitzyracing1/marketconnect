import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-muted-foreground text-lg">Page not found</p>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
