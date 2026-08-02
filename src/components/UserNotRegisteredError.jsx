import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function UserNotRegisteredError() {
  return (
    <div className="text-center space-y-4 p-8">
      <h2 className="text-xl font-semibold">Account not found</h2>
      <p className="text-muted-foreground">This user is not registered in the system.</p>
      <Button asChild>
        <Link to="/register">Create Account</Link>
      </Button>
    </div>
  )
}
