import { useState } from 'react'
import { CSSUnitValue, DimensionInput, stringifyUnit } from '@compai/css-gui'

export const DimensionExample = () => {
  const [value, setValue] = useState<CSSUnitValue>({
    value: 16,
    unit: 'px',
  })
  return (
    <div>
      <div sx={{ width: 256, ml: 0 }}>
        <DimensionInput
          property="fontSize"
          value={value}
          onChange={setValue}
          units={['px', 'em', 'rem']}
        />
      </div>
      <h1
        sx={{
          m: 0,
          lineHeight: 1.2,
          fontSize: stringifyUnit('fontSize', value),
        }}
      >
        Aa
      </h1>
    </div>
  )
}