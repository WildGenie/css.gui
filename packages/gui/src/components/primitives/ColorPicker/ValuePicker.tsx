import ChannelFields from './ChannelFields'
import HsvColorPicker from './HSVPicker'
import P3HsvColorPicker from './P3HSVPicker'
import ColorValueDisplay from './ValueDisplay'
import { format, getColorMode, isValidColor } from './util'
import LchColorPicker from './LCHPicker'
import LabColorPicker from './LabPicker'
import { Theme } from '../../../types/theme'
import { PreviewPalettePicker } from './PreviewPalettePicker'
import { Color } from '../../../types/css'

interface Props {
  value: Color
  onChange(value: Color): void
  theme?: Theme
  onTabChange?(value: string): void
}

// The "normal" color picker that lets you set a color value directly
export default function ColorPicker(props: Props) {
  const { value, onChange, theme = {} } = props
  
  const normedValue = isValidColor(value.value) ? value.value : '#000000'
  console.log(normedValue, 'my value')
  const mode = getColorMode(normedValue)

  return (
    <div>
      {/* Color Definition and mode */}
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {/* Color swatch */}
        <ColorValueDisplay value={value} onChange={onChange} />
        <select
          value={mode}
          onChange={(e) => {
            onChange(format(value, e.target.value))
          }}
          sx={{
            marginLeft: 'auto',
            backgroundColor: 'background',
            color: 'text',
            width: '4rem',
            border: '1px solid',
            borderColor: 'border',
            padding: 1,
          }}
        >
          {['hex', 'rgb', 'hsl', 'lab', 'lch', 'p3'].map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>
      <ChannelFields mode={mode} value={{ ...value, value: normedValue}} onChange={onChange} />
      {mode === 'p3' ? (
        <P3HsvColorPicker value={{ ...value, value: normedValue}} onChange={onChange} mode={mode} />
      ) : mode === 'lab' ? (
        <LabColorPicker value={{ ...value, value: normedValue}} onChange={onChange} mode={mode} />
      ) : mode === 'lch' ? (
        <LchColorPicker value={{ ...value, value: normedValue}} onChange={onChange} mode={mode} />
      ) : (
        <HsvColorPicker value={{ ...value, value: normedValue}} onChange={onChange} mode={mode} />
      )}
      {theme && (
        <PreviewPalettePicker
          value={{ ...value, value: normedValue}}
          onChange={onChange}
          theme={theme}
        />
      )}
    </div>
  )
}
