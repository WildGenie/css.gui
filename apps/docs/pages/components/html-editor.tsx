import { HtmlEditor, HtmlRenderer, htmlToEditorSchema } from '@compai/css-gui'
import { useState } from 'react'

// TODO: Handle style attrs
const initialValue = htmlToEditorSchema(`
<div class="section">
  <h1>Hello, world!</h1>
  <h2>Weeee!</h2>
  <button>I'm a CTA</button>
  <a href="https://components.ai">I'm a link!</a>
</div>
`)

export default function HtmlEditorExample() {
  const [html, setHtml] = useState(initialValue)
  return (
    <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <HtmlEditor value={html} onChange={setHtml} />
      <HtmlRenderer value={html} />
    </div>
  )
}