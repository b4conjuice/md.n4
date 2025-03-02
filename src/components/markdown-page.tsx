import { Main, Markdown } from '@/components/ui'

export default function MarkdownPage({ markdown }: { markdown: string }) {
  return (
    <Main className='flex flex-col md:p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Markdown content={markdown} />
      </div>
    </Main>
  )
}
