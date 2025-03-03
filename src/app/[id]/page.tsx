import { connection } from 'next/server'

import MarkdownPage from '@/components/markdown-page'
import { getNote } from '@/server/db/notes'

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const noteId = Number((await params).id)
  const note = await getNote(noteId)
  if (!note) {
    const markdown =
      '<h1>oops</h1>\n<p>something went wrong, note does not exist. but it should though 🤔</p>'
    return <MarkdownPage markdown={markdown} />
  }
  await connection()
  const { markdown } = note
  return <MarkdownPage markdown={markdown} />
}