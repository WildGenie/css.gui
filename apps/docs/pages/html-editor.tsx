import {
  HtmlEditor,
  HtmlRenderer,
  HtmlEditorProvider,
  htmlToEditorSchema,
} from '@compai/css-gui'
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
    <div sx={{ display: 'flex' }}>
      <HtmlEditorProvider value={html}>
        <HtmlEditor onChange={setHtml} />
        <div sx={{ width: '100%' }}>
          <HtmlRenderer value={html} />
        </div>
      </HtmlEditorProvider>
    </div>
  )
}
