import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function IdeaInput({ onSubmit }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onSubmit?.(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Textarea
        placeholder="Describe your idea..."
        value={text}
        onChange={e => setText(e.target.value)}
        rows={4}
      />
      <Button type="submit" disabled={!text.trim()}>Submit Idea</Button>
    </form>
  )
}
