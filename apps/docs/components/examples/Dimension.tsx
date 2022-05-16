import { useState } from 'react'
import {
  CSSFunctionCalc,
  DimensionInput,
  Length,
  stringifyProperty,
} from '@compai/css-gui'

export const DimensionExample = () => {
  const [value, setValue] = useState<Length | CSSFunctionCalc>({
    value: 16,
    unit: 'px',
  })
  return (
    <div>
      <div sx={{ width: 256, ml: 0 }}>
        <DimensionInput
          value={value}
          onChange={setValue}
          units={['px', 'em', 'rem']}
        />
      </div>
      <h1
        sx={{
          m: 0,
          lineHeight: 1.2,
          fontSize: stringifyProperty('fontSize', value),
        }}
      >
        Aa
      </h1>
    </div>
  )
}
