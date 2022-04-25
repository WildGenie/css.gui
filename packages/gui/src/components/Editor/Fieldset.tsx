import * as React from 'react'
import { elements } from '../../data/elements'
import { pseudoClasses } from '../../data/pseudo-classes'
import { pseudoElements } from '../../data/pseudo-elements'

type PseudoElementTypes = typeof pseudoElements[number]
type PseudoClassTypes = typeof pseudoClasses[number]
type ElementTypes = typeof elements[number]

type FieldsetContextProps = {
  type: 'pseudo-element' | 'pseudo-class' | 'element'
  name: PseudoElementTypes | PseudoClassTypes | ElementTypes
}

const FieldsetContext = React.createContext<FieldsetContextProps | null>(null)

export const useFieldset = (): FieldsetContextProps | null =>
  React.useContext(FieldsetContext)

type FieldsetProps = FieldsetContextProps & { children: any }
export const Fieldset = ({ type, name, children }: FieldsetProps) => {
  // TODO: Merge fieldset
  return (
    <FieldsetContext.Provider value={{ type, name }}>
      {children}
    </FieldsetContext.Provider>
  )
}