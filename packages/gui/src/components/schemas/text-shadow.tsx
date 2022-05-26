import { createArraySchema, createObjectSchema } from './data-type'
import { color, length } from './primitives'

const singleTextShadow = createObjectSchema({
  fields: {
    color: { schema: color },
    offsetX: { schema: length },
    offsetY: { schema: length },
    blur: { schema: length },
  },
})

export const textShadow = createArraySchema({
  itemSchema: singleTextShadow,
  separator: ' ',
  thumbnail: Thumbnail,
})

function Thumbnail({ value }: { value: string }) {
  return (
    <div
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div sx={{ textShadow: value, fontWeight: 'bold' }}>Aa</div>
    </div>
  )
}
