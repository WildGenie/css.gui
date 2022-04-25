import { ComponentType } from 'react'
import BoxShadowPicker from '../BoxShadow/picker'
import { lengthInputs, percentageInputs, numberInputs, positionalInputs } from '../editors'
import { colorInputs } from '../editors/ColorInputs'
import { easingFunctionInputs } from '../editors/EasingFunctionInputs'
import { keywordInputs } from '../editors/KeywordInputs'
import { timeInputs } from '../editors/TimePropertyInputs'
import FilterPicker from '../Filter/picker'
import TextShadowPicker from '../TextShadow/picker'

export const controlMap: Record<string, ComponentType<any>> = {
  ...keywordInputs,
  ...colorInputs,
  ...lengthInputs,
  ...percentageInputs,
  ...numberInputs,
  ...timeInputs,
  ...easingFunctionInputs,
  ...positionalInputs,
  boxShadow: BoxShadowPicker,
  textShadow: TextShadowPicker,
  filter: FilterPicker,
}
