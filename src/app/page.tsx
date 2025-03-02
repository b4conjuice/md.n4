import { Main, Markdown } from '@/components/ui'

export default function Home() {
  const markdown =
    '<h1>md</h1>\n<p>this is a paragraph in markdown. try it on <a href=\"https://n4.dlopez.app\">n4.dlopez.app</a></p>\n<h2>h2</h2>\n<p>the quick brown fox jumped over the lazy dogs</p>\n<h3>h3: list</h3>\n<ul>\n<li><input type=\"checkbox\" disabled=\"\" checked=\"\"> mr robot</li>\n<li><input type=\"checkbox\" disabled=\"\" checked=\"\"> bear</li>\n<li><input type=\"checkbox\" disabled=\"\" checked=\"\"> andor</li>\n<li>avatar</li>\n<li>bad batch</li>\n</ul>\n<h4>h4: stack</h4>\n<ul>\n<li>chrono trigger</li>\n<li>mother 3</li>\n<li>link between worlds</li>\n<li>fire emblem</li>\n</ul>\n<h2>fav pixar movies</h2>\n<ol>\n<li>finding nemo</li>\n<li>wall-e</li>\n<li>toy story 3</li>\n<li>inside out</li>\n<li>coco</li>\n</ol>\n'
  return (
    <Main className='flex flex-col md:p-4'>
      <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
        <Markdown content={markdown} />
      </div>
    </Main>
  )
}
