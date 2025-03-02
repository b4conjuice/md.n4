export default function Markdown({ content }: { content: string }) {
  return (
    <article
      className='prose bg-cb-blue text-cb-white lg:prose-xl prose-headings:text-cb-white prose-h1:text-center prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 prose-strong:text-cb-white prose-code:text-cb-mint w-full rounded p-4'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
