import { Outlet, Link } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <Link to="/" className="mb-8 font-bold text-xl">Market Connect</Link>
      <Outlet />
    </div>
  )
}
