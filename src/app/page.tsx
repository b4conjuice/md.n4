import MarkdownPage from '@/components/markdown-page'
import { getNote } from '@/server/db/notes'

export default async function Home() {
  const noteId = process.env.HOMEPAGE_NOTE_ID
    ? Number(process.env.HOMEPAGE_NOTE_ID)
    : null
  if (!noteId) {
    const markdown =
      '<h1>oops</h1>\n<p>something went wrong, noteId does not exist. but it should though 🤔</p>'
    return <MarkdownPage markdown={markdown} />
  }
  const note = await getNote(noteId)
  if (!note) {
    const markdown =
      '<h1>oops</h1>\n<p>something went wrong, note does not exist. but it should though 🤔</p>'
    return <MarkdownPage markdown={markdown} />
  }
  const { markdown } = note
  return <MarkdownPage markdown={markdown} />
}
