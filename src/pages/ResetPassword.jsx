import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Set New Password</CardTitle>
      </CardHeader>
      <CardContent>
        {done ? (
          <p className="text-sm text-muted-foreground">Password updated. <Link to="/login" className="underline">Sign in</Link></p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full">Update Password</Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
