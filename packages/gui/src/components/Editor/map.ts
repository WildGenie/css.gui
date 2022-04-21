import { FontSizeInput, LineHeightInput } from '../editors'
import { BackgroundColorInput, ColorInput } from '../editors/ColorInputs'

export const controlMap: Record<string, any> = {
  fontSize: FontSizeInput,
  lineHeight: LineHeightInput,
  color: ColorInput,
  backgroundColor: BackgroundColorInput,
}