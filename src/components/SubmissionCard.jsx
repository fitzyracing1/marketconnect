import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function SubmissionCard({ submission }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            <Link to={`/submission/${submission.id}`} className="hover:underline">
              {submission.title || 'Untitled Idea'}
            </Link>
          </CardTitle>
          <Badge variant="secondary">{submission.status || 'pending'}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {submission.description || submission.idea_text}
        </p>
      </CardContent>
    </Card>
  )
}
