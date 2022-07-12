export interface ElementData {
  type: 'element' | 'text'
  tagName?: string
  attributes?: Record<string, string>
  // `style` is an attribute, but we treat it specially for CSS.gui
  style?: Record<string, any>
  value?: string
  children?: HtmlNode[]
}

export type Slot = {
  type: 'slot'
  name: string
}
export type PropDefinition = {
  name: string
  type: 'string' | 'number'
  defaultValue?: string | number
}
export type PropsDefinition = PropDefinition[]
export interface ComponentData {
  type: 'component'
  id: string
  tagName: string
  propTypes: PropsDefinition
  value: HtmlNode
  attributes?: Record<string, string>
  style?: Record<string, any>
  children?: HtmlNode[]
}

export type HtmlNode = ElementData | ComponentData | Slot
export type ElementPath = number[]

export const enum HTMLTag {
  A = 'a',
  Abbr = 'abbr',
  Address = 'address',
  Article = 'article',
  Aside = 'aside',
  Audio = 'audio',
  B = 'b',
  Bdi = 'bdi',
  Bdo = 'bdo',
  Blockquote = 'blockquote',
  Br = 'br',
  Button = 'button',
  Caption = 'caption',
  Cite = 'cite',
  Code = 'code',
  Col = 'col',
  Colgroup = 'colgroup',
  Data = 'data',
  Datalist = 'datalist',
  Dd = 'dd',
  Del = 'del',
  Details = 'details',
  Dfn = 'dfn',
  Dialog = 'dialog',
  Div = 'div',
  Dl = 'dl',
  Dt = 'dt',
  Em = 'em',
  Fieldset = 'fieldset',
  Figcaption = 'figcaption',
  Figure = 'figure',
  Footer = 'footer',
  Form = 'form',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Header = 'header',
  Hr = 'hr',
  I = 'i',
  Img = 'img',
  Input = 'input',
  Ins = 'ins',
  Kbd = 'kbd',
  Label = 'label',
  Legend = 'legend',
  Li = 'li',
  Main = 'main',
  Mark = 'mark',
  Menu = 'menu',
  Menuitem = 'menuitem',
  Meter = 'meter',
  Nav = 'nav',
  Noscript = 'noscript',
  Ol = 'ol',
  Optgroup = 'optgroup',
  Option = 'option',
  Output = 'output',
  P = 'p',
  Picture = 'picture',
  Pre = 'pre',
  Progress = 'progress',
  Q = 'q',
  Rp = 'rp',
  Rt = 'rt',
  Rtc = 'rtc',
  Ruby = 'ruby',
  S = 's',
  Samp = 'samp',
  Span = 'span',
  Section = 'section',
  Select = 'select',
  Source = 'source',
  Slot = 'slot',
  Small = 'small',
  Sub = 'sub',
  Summary = 'summary',
  Sup = 'sup',
  Table = 'table',
  Tbody = 'tbody',
  Td = 'td',
  Template = 'template',
  TextArea = 'textarea',
  Tfoot = 'tfoot',
  Th = 'th',
  Thead = 'thead',
  Time = 'time',
  Tr = 'tr',
  Track = 'track',
  U = 'u',
  Ul = 'ul',
  Var = 'var',
  Video = 'video',
  Wbr = 'wbr',
  Svg = 'svg',
  Circle = 'circle',
  Line = 'line',
  Path = 'path',
  Rect = 'rect',
  Text = 'text',
  Polyline = 'polyline',
}
