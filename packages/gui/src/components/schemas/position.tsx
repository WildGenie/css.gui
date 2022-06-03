import { stringifyPosition } from '../../lib/stringify'
import { Position } from '../../types/css'
import { PositionInput } from '../inputs/PositionInput'
import { DataTypeSchema } from './types'

export const position: DataTypeSchema<Position> = {
  input: PositionInput,
  stringify: stringifyPosition,
  defaultValue: {
    x: { value: 'center', unit: 'keyword' },
    y: { value: 'center', unit: 'keyword' },
  },
}