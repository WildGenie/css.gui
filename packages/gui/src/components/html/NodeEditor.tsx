import { HtmlNode, HTMLTag } from './types'
import { Label, Combobox } from '../primitives'
import { SelectInput } from '../inputs/SelectInput'
import { AttributeEditor } from './AttributeEditor'
import { DEFAULT_ATTRIBUTES, DEFAULT_STYLES } from './default-styles'
import { useHtmlEditor } from './Provider'
import { addChildAtPath, getChildAtPath } from './util'
import { NodeEditorDropdown } from '../ui/dropdowns/NodeEditorDropdown'
import { ComponentEditor } from './ComponentEditor'
import { SlotEditor } from './SlotEditor'

interface EditorProps {
  value: HtmlNode
  onChange(value: HtmlNode): void
}

interface TagEditorProps extends EditorProps {
  onRemove(): void
  onParentChange?(parentValue: HtmlNode): void
}

export function NodeEditor({
  value,
  onChange,
  onRemove,
  onParentChange,
}: TagEditorProps) {
  const {
    value: fullValue,
    selected,
    hasComponents,
    components,
  } = useHtmlEditor()
  let nodeType = value.type === 'text' ? 'text' : 'tag'
  if (value.type === 'component') {
    nodeType = 'component'
  }

  const baseNodeTypes = ['text', 'tag']
  const nodeTypes = hasComponents
    ? [...baseNodeTypes, 'component', 'slot']
    : baseNodeTypes

  return (
    <div
      sx={{
        bg: 'background',
        height: '240px',
        resize: 'vertical',
        position: 'sticky',
        top: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'border',
      }}
    >
      <div
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          px: 3,
          pt: 3,
          width: '100%',
        }}
      >
        <div sx={{ flexGrow: 1 }}>
          <SelectInput
            label="Type"
            value={nodeType}
            onChange={(value) => {
              if (value === 'text') {
                onChange({ type: 'text', value: '' })
              } else if (value === 'component') {
                const firstComponent = components?.[0]

                if (firstComponent) {
                  onChange(firstComponent)
                }
              } else if (value === 'slot') {
                onChange({
                  type: 'slot',
                  name: 'newSlot',
                  value: 'Hello, world!',
                })
              } else {
                onChange({
                  type: 'element',
                  tagName: 'div',
                  children: [],
                })
              }
            }}
            options={nodeTypes}
          />
        </div>
        <div sx={{ mr: -2 }}>
          <NodeEditorDropdown
            onRemove={onRemove}
            onDuplicate={() => {
              const parentPath = [...(selected || [])]
              const childIndex = parentPath.pop() // Remove child from parent path

              const parent = getChildAtPath(fullValue, parentPath)
              const newParent = addChildAtPath(parent, [childIndex ?? 0], {
                ...value,
              })

              const onChangeForParent = onParentChange
                ? onParentChange
                : onChange
              onChangeForParent(newParent)
            }}
            onWrap={() => {
              const wrappedNode: HtmlNode = {
                type: 'element',
                tagName: 'div',
                children: [value],
              }
              return onChange(wrappedNode)
            }}
          />
        </div>
      </div>
      <NodeSwitch value={value} onChange={onChange} />
    </div>
  )
}

function NodeSwitch({ value, onChange }: EditorProps) {
  const { selected } = useHtmlEditor()

  if (value.type === 'text') {
    return (
      <div sx={{ px: 3 }}>
        <Label>
          <span sx={{ display: 'block' }}>Content</span>
          <textarea
            rows={8}
            sx={{
              width: '100%',
            }}
            value={value.value}
            onChange={(e) =>
              onChange({
                ...value,
                value: e.target.value,
              })
            }
          />
        </Label>
      </div>
    )
  }

  if (value.type === 'component') {
    return <ComponentEditor value={value} onChange={onChange} />
  }

  if (value.type === 'slot') {
    return <SlotEditor value={value} onChange={onChange} />
  }

  return (
    <div>
      <article
        sx={{
          pb: 3,
        }}
      >
        <div sx={{ mb: 2, px: 3 }}>
          <Label>Tag name</Label>{' '}
          <Combobox
            key={selected?.join('-')}
            onFilterItems={(filterValue) => {
              return HTML_TAGS.filter((el) => el.startsWith(filterValue))
            }}
            onItemSelected={(selectedItem) => {
              const defaultStyles = DEFAULT_STYLES[selectedItem] || {}
              const mergedStyles = { ...defaultStyles, ...value.style }
              const defaultAttributes = DEFAULT_ATTRIBUTES[selectedItem] || {}
              const mergedAttributes = {
                ...defaultAttributes,
                ...(value.attributes || {}),
              }
              onChange({
                ...value,
                attributes: mergedAttributes,
                tagName: selectedItem,
                style: mergedStyles,
              })
            }}
            items={HTML_TAGS}
            value={value.tagName}
          />
        </div>
        <div>
          <AttributeEditor
            value={value.attributes ?? {}}
            onChange={(newAttributes) =>
              onChange({ ...value, attributes: newAttributes })
            }
            element={value.tagName as string}
          />
        </div>
      </article>
    </div>
  )
}

const HTML_TAGS = [
  HTMLTag.A,
  HTMLTag.Abbr,
  HTMLTag.Address,
  HTMLTag.Article,
  HTMLTag.Aside,
  HTMLTag.Audio,
  HTMLTag.B,
  HTMLTag.Bdi,
  HTMLTag.Bdo,
  HTMLTag.Blockquote,
  HTMLTag.Br,
  HTMLTag.Button,
  HTMLTag.Caption,
  HTMLTag.Cite,
  HTMLTag.Code,
  HTMLTag.Col,
  HTMLTag.Colgroup,
  HTMLTag.Data,
  HTMLTag.Datalist,
  HTMLTag.Dd,
  HTMLTag.Del,
  HTMLTag.Details,
  HTMLTag.Dfn,
  HTMLTag.Dialog,
  HTMLTag.Div,
  HTMLTag.Dl,
  HTMLTag.Dt,
  HTMLTag.Em,
  HTMLTag.Fieldset,
  HTMLTag.Figcaption,
  HTMLTag.Figure,
  HTMLTag.Footer,
  HTMLTag.Form,
  HTMLTag.H1,
  HTMLTag.H2,
  HTMLTag.H3,
  HTMLTag.H4,
  HTMLTag.H5,
  HTMLTag.H6,
  HTMLTag.Header,
  HTMLTag.Hr,
  HTMLTag.I,
  HTMLTag.Img,
  HTMLTag.Input,
  HTMLTag.Ins,
  HTMLTag.Kbd,
  HTMLTag.Label,
  HTMLTag.Legend,
  HTMLTag.Li,
  HTMLTag.Main,
  HTMLTag.Mark,
  HTMLTag.Menu,
  HTMLTag.Menuitem,
  HTMLTag.Meter,
  HTMLTag.Nav,
  HTMLTag.Noscript,
  HTMLTag.Ol,
  HTMLTag.Optgroup,
  HTMLTag.Option,
  HTMLTag.Output,
  HTMLTag.P,
  HTMLTag.Picture,
  HTMLTag.Pre,
  HTMLTag.Progress,
  HTMLTag.Q,
  HTMLTag.Rp,
  HTMLTag.Rt,
  HTMLTag.Rtc,
  HTMLTag.Ruby,
  HTMLTag.S,
  HTMLTag.Samp,
  HTMLTag.Span,
  HTMLTag.Section,
  HTMLTag.Select,
  HTMLTag.Source,
  HTMLTag.Slot,
  HTMLTag.Small,
  HTMLTag.Sub,
  HTMLTag.Summary,
  HTMLTag.Sup,
  HTMLTag.Table,
  HTMLTag.Tbody,
  HTMLTag.Td,
  HTMLTag.Template,
  HTMLTag.TextArea,
  HTMLTag.Tfoot,
  HTMLTag.Th,
  HTMLTag.Thead,
  HTMLTag.Time,
  HTMLTag.Tr,
  HTMLTag.Track,
  HTMLTag.U,
  HTMLTag.Ul,
  HTMLTag.Var,
  HTMLTag.Video,
  HTMLTag.Wbr,
  HTMLTag.Svg,
  HTMLTag.Circle,
  HTMLTag.Line,
  HTMLTag.Rect,
  HTMLTag.Path,
  HTMLTag.Text,
  HTMLTag.Polyline,
]
