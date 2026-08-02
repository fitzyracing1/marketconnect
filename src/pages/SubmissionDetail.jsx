import { useParams, Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'

export default function SubmissionDetail() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Submission {id}</h1>
        <p className="text-muted-foreground mb-6">Details for this idea submission.</p>
        <Button asChild variant="outline">
          <Link to="/dashboard">Back to Dashboard</Link>
        </Button>
      </main>
    </div>
  )
}
