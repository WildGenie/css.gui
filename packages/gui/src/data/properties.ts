import { lowerCase, upperFirst } from 'lodash-es'
import {
  AbsoluteLengthUnits,
  FontRelativeLengthUnits,
  PercentageLengthUnits,
} from '../types/css'
import { ANIMATABLE_PROPERTIES } from './animatable'

type PropertyData = {
  type: string
  percentage?: boolean
  number?: boolean
  keywords?: Array<string>
  range?: UnitRanges
  defaultValue?: string
}

type UnitRanges = Record<string, [number, number]>

export const getPropertyData = (property?: string): PropertyData | null => {
  const propertyData = properties[property || '']
  return propertyData ?? null
}

export const getPropertyLabel = (property: string) => {
  return upperFirst(lowerCase(property))
}

export const properties: Record<string, PropertyData> = {
  alignContent: {
    type: 'keyword',
    keywords: [
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'normal',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
      'safe center',
      'unsafe center',
    ],
  },
  alignItems: {
    type: 'keyword',
    keywords: [
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'normal',
      'stretch',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'safe center',
      'unsafe center',
    ],
  },
  alignSelf: {
    type: 'keyword',
    keywords: [
      'auto',
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'normal',
      'stretch',
      'baseline',
      'first baseline',
      'last baseline',
      'space-between',
      'space-around',
      'space-evenly',
      'safe center',
      'unsafe center',
    ],
  },
  // TODO array of time values
  animationDelay: { type: 'time' },
  animationDuration: { type: 'time' },
  // TODO this should be a combobox
  animationProperty: {
    type: 'keyword',
    keywords: ANIMATABLE_PROPERTIES,
  },
  animationTimingFunction: { type: 'easing-function' },
  appearance: {
    type: 'keyword',
    keywords: [
      'none',
      'auto',
      'menulist-button',
      'textfield',
      'button',
      'searchfield',
      'textarea',
      'push-button',
      'slider-horizontal',
      'checkbox',
      'radio',
      'square-button',
      'menulist',
      'listbox',
      'meter',
      'progress-bar',
    ],
  },
  backfaceVisibility: {
    type: 'keyword',
    keywords: ['visible', 'hidden'],
  },
  backgroundBlendMode: {
    type: 'keyword',
    keywords: [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
    ],
  },
  backgroundColor: {
    type: 'color',
    defaultValue: '#fff',
    keywords: ['currentcolor', 'transparent'],
  },
  backgroundClip: {
    type: 'keyword',
    keywords: ['border-box', 'padding-box', 'content-box', 'text'],
  },
  backgroundOrigin: {
    type: 'keyword',
    keywords: ['border-box', 'padding-box', 'content-box'],
  },
  borderColor: {
    type: 'color',
    keywords: ['currentcolor', 'transparent'],
  },
  borderWidth: {
    type: 'length',
    keywords: ['thin', 'medium', 'thick'],
  },
  boxSizing: {
    type: 'keyword',
    keywords: ['border-box', 'content-box'],
  },
  breakAfter: {
    type: 'keyword',
    keywords: [
      'auto',
      'avoid',
      'always',
      'all',
      'avoid-page',
      'page',
      'left',
      'right',
      'recto',
      'verso',
      'avoid-column',
      'column',
      'avoid-region',
      'region',
    ],
  },
  breakBefore: {
    type: 'keyword',
    keywords: [
      'auto',
      'avoid',
      'always',
      'all',
      'avoid-page',
      'page',
      'left',
      'right',
      'recto',
      'verso',
      'avoid-column',
      'column',
      'avoid-region',
      'region',
    ],
  },
  breakInside: {
    type: 'keyword',
    keywords: ['auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region'],
  },
  captionSide: {
    type: 'keyword',
    keywords: [
      'top',
      'bottom',
      'block-start',
      'block-end',
      'inline-start',
      'inline-end',
    ],
  },
  caretColor: {
    type: 'color',
    keywords: ['currentcolor', 'transparent'],
  },
  clear: {
    type: 'keyword',
    keywords: ['none', 'left', 'right', 'both', 'inline-start', 'inline-end'],
  },
  color: {
    type: 'color',
    keywords: ['currentcolor', 'transparent'],
  },
  columnFill: {
    type: 'keyword',
    keywords: ['auto', 'balance', 'balance-all'],
  },
  columnRuleStyle: {
    type: 'keyword',
    keywords: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
  },
  columnSpan: {
    type: 'keyword',
    keywords: ['none', 'all'],
  },
  contain: {
    type: 'keyword',
    keywords: [
      'none',
      'strict',
      'content',
      'size',
      'layout',
      'style',
      'paint',
      'size paint',
      'size layout paint',
      'size layout paint style',
      'size layout paint style content',
    ],
  },
  contentVisibility: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'auto'],
  },
  // TODO: Add url() for images to cursor
  cursor: {
    type: 'keyword',
    keywords: [
      'auto',
      'default',
      'none',
      'context-menu',
      'progress',
      'pointer',
      'help',
      'wait',
      'crosshair',
      'cell',
      'not-allowed',
      'text',
      'vertical-text',
      'alias',
      'copy',
      'move',
      'no-drop',
      'grab-drop',
      'grabbing-drop',
      'all-scroll',
      'col-resize',
      'row-resize',
      'n-resize',
      'e-resize',
      's-resize',
      'w-resize',
      'ne-resize',
      'nw-resize',
      'se-resize',
      'sw-resize',
      'ew-resize',
      'ns-resize',
      'nesw-resize',
      'nwse-resize',
      'zoom-in',
      'zoom-out',
    ],
  },
  direction: {
    type: 'keyword',
    keywords: ['ltr', 'rtl'],
  },
  display: {
    type: 'keyword',
    keywords: [
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'flow-root',
      'none',
      'table',
      'table-row',
      'list-item',
      'block flow',
      'inline flow',
      'inline flow-root',
      'block flex',
      'inline flex',
      'block grid',
      'inline grid',
      'block flow-root',
    ],
  },
  emptyCells: {
    type: 'keyword',
    keywords: ['show', 'hide'],
  },
  flexDirection: {
    type: 'keyword',
    keywords: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  flexFlow: {
    type: 'keyword',
    keywords: [
      'row',
      'row-reverse',
      'column',
      'column-reverse',
      'nowrap',
      'wrap',
      'wrap-reverse',
      'row nowrap',
      'column nowrap',
      'row wrap',
      'column wrap',
      'row-reverse nowrap',
      'column-reverse nowrap',
      'row-reverse wrap',
      'column-reverse wrap',
    ],
  },
  flexWrap: {
    type: 'keyword',
    keywords: ['nowrap', 'wrap', 'wrap-reverse'],
  },
  float: {
    type: 'keyword',
    keywords: ['left', 'right', 'none', 'inline-start', 'inline-end'],
  },
  fontSize: {
    type: 'length',
    percentage: true,
    range: {
      [AbsoluteLengthUnits.Px]: [0, 512],
      [FontRelativeLengthUnits.Em]: [0, 16],
      [FontRelativeLengthUnits.Rem]: [0, 16],
      [PercentageLengthUnits.Pct]: [0.1, 100],
    },
    keywords: [
      'xx-small',
      'x-small',
      'small',
      'medium',
      'large',
      'x-large',
      'xx-large',
      'xxx-large',
      'smaller',
      'larger',
    ],
  },
  fontKerning: {
    type: 'keyword',
    keywords: ['auto', 'normal', 'none'],
  },
  fontOpticalSizing: {
    type: 'keyword',
    keywords: ['auto', 'none'],
  },
  fontStretch: {
    type: 'percentage',
    keywords: [
      'ultra-condensed',
      'extra-condensed',
      'condensed',
      'semi-condensed',
      'normal',
      'semi-expanded',
      'expanded',
      'extra-expanded',
      'ultra-expanded',
    ],
    range: { [PercentageLengthUnits.Pct]: [50, 200] },
  },
  fontStyle: {
    type: 'keyword',
    keywords: [
      'normal',
      'italic',
      'oblique',
      'oblique 10deg',
      'oblique 20deg',
      'oblique 30deg',
      'oblique 40deg',
    ],
  },
  fontSynthesis: {
    type: 'keyword',
    keywords: [
      'none',
      'weight',
      'style',
      'small-caps',
      'weight style',
      'weight small-caps',
      'style small-caps',
      'weight style small-caps',
    ],
  },
  fontVariantCaps: {
    type: 'keyword',
    keywords: [
      'normal',
      'small-caps',
      'all-small-caps',
      'petite-caps',
      'all-petite-caps',
      'unicase',
      'titling-caps',
    ],
  },
  fontVariantEastAsian: {
    type: 'keyword',
    keywords: [
      'normal',
      'ruby',
      'jis78',
      'jis90',
      'jis04',
      'simplified',
      'traditional',
      'full-width',
      'proportional-width',
      'ruby full-width jis83',
    ],
  },
  fontVariantLigatures: {
    type: 'keyword',
    keywords: [
      'normal',
      'none',
      'common-ligatures',
      'no-common-ligatures',
      'discretionary-ligatures',
      'no-discretionary-ligatures',
      'historical-ligatures',
      'no-historical-ligatures',
      'contextual',
      'no-contextual',
    ],
  },
  fontVariantNumeric: {
    type: 'keyword',
    keywords: [
      'normal',
      'ordinal',
      'slashed-zero',
      'lining-nums',
      'oldstyle-nums',
      'proportional-nums',
      'tabular-nums',
      'diagonal-fractinos',
      'stacked-fractions',
      // TODO: Research and add additional combinations
    ],
  },
  fontVariantPosition: {
    type: 'keyword',
    keywords: ['normal', 'sub', 'super'],
  },
  forceColorAdjust: {
    type: 'keyword',
    keywords: ['auto', 'none'],
  },
  gridAutoFlow: {
    type: 'keyword',
    keywords: ['row', 'column', 'dense', 'row dense', 'column dense'],
  },
  height: {
    type: 'length',
    percentage: true,
    keywords: ['max-content', 'min-content', 'auto'],
  },
  hyphens: {
    type: 'keyword',
    keywords: ['none', 'manual', 'auto'],
  },
  imageRendering: {
    type: 'keyword',
    keywords: ['auto', 'crisp-edges', 'pixelated'],
  },
  isolation: {
    type: 'keyword',
    keywords: ['auto', 'isolate'],
  },
  justifyContent: {
    type: 'keyword',
    keywords: [
      'start',
      'center',
      'end',
      'space-between',
      'space-around',
      'space-evenly',
      'flex-start',
      'flex-end',
      'left',
      'right',
      'normal',
      'stretch',
      'safe center',
      'unsafe center',
    ],
  },
  justifyItems: {
    type: 'keyword',
    keywords: [
      'normal',
      'stretch',
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'self-start',
      'self-end',
      'left',
      'right',
      'baseline',
      'first baseline',
      'last baseline',
      'safe center',
      'unsafe center',
    ],
  },
  justifySelf: {
    type: 'keyword',
    keywords: [
      'normal',
      'stretch',
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'self-start',
      'self-end',
      'left',
      'right',
      'baseline',
      'first baseline',
      'last baseline',
      'safe center',
      'unsafe center',
    ],
  },
  lineBreak: {
    type: 'keyword',
    keywords: ['auto', 'loose', 'normal', 'strict', 'anywhere'],
  },
  listStylePosition: {
    type: 'keyword',
    keywords: ['inside', 'outside'],
  },
  lineHeight: {
    type: 'length',
    percentage: true,
    number: true,
    keywords: ['normal'],
  },
  margin: {
    type: 'dimensional',
    percentage: true,
  },
  maskClip: {
    type: 'keyword',
    keywords: [
      'content-box',
      'padding-box',
      'border-box',
      'margin-box',
      'fill-box',
      'stroke-box',
      'view-box',
      'no-clip',
    ],
  },
  maskComposite: {
    type: 'keyword',
    keywords: ['add', 'subtract', 'intersect', 'exclude'],
  },
  maskMode: {
    type: 'keyword',
    keywords: [
      'alpha',
      'luminance',
      'match-source',
      'alpha luminance',
      'alpha match-source',
      'alpha match-source luminance',
      'match-source luminance',
    ],
  },
  maskOrigin: {
    type: 'keyword',
    keywords: [
      'content-box',
      'padding-box',
      'border-box',
      'margin-box',
      'fill-box',
      'stroke-box',
      'view-box',
      'padding-box, content-box',
      'vew-box, fill-box, border-box',
    ],
  },
  mixBlendMode: {
    type: 'keyword',
    keywords: [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
    ],
  },
  objectFit: {
    type: 'keyword',
    keywords: ['contain', 'cover', 'fill', 'none', 'scale-down'],
  },
  outlineStyle: {
    type: 'keyword',
    keywords: [
      'none',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
  },
  overflow: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'clip', 'scroll', 'auto', 'hidden visible'],
  },
  overflowAnchor: {
    type: 'keyword',
    keywords: ['auto', 'none'],
  },
  overflowBlock: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'scroll', 'auto'],
  },
  overflowInline: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'scroll', 'auto'],
  },
  overflowWrap: {
    type: 'keyword',
    keywords: ['normal', 'break-word', 'anywhere'],
  },
  overflowX: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  },
  overflowY: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  },
  overscrollBehavior: {
    type: 'keyword',
    keywords: ['auto', 'contain', 'none', 'auto contain'],
  },
  overscrollBehaviorBlock: {
    type: 'keyword',
    keywords: ['auto', 'contain', 'none'],
  },
  overscrollBehaviorInline: {
    type: 'keyword',
    keywords: ['auto', 'contain', 'none'],
  },
  overscrollBehaviorX: {
    type: 'keyword',
    keywords: ['auto', 'contain', 'none'],
  },
  overscrollBehaviorY: {
    type: 'keyword',
    keywords: ['auto', 'contain', 'none'],
  },
  padding: {
    type: 'length',
    percentage: true,
  },
  placeItems: {
    type: 'keyword',
    keywords: [
      'center',
      'normal start',
      'center normal',
      'start legacy',
      'end normal',
      'self-start legacy',
      'self-end normal',
      'flex-start legacy',
      'flex-end normal',
      'left legacy',
      'right normal',
      'baseline normal',
      'first baseline legacy',
      'last baseline normal',
      'stretch legacy',
    ],
  },
  placeSelf: {
    type: 'keyword',
    keywords: [
      'auto center',
      'normal start',
      'center normal',
      'start auto',
      'end normal',
      'self-start auto',
      'self-end normal',
      'flex-start auto',
      'flex-end normal',
      'left auto',
      'right normal',
      'baseline normal',
      'first baseline auto',
      'last baseline normal',
      'stretch auto',
    ],
  },
  pointerEvents: {
    type: 'keyword',
    keywords: [
      'auto',
      'none',
      // svg only
      'visiblePainted',
      'visibleFill',
      'visibleStroke',
      'visible',
      'painted',
      'fill',
      'stroke',
      'all',
    ],
  },
  position: {
    type: 'keyword',
    keywords: ['static', 'relative', 'asbolsute', 'fixed', 'sticky'],
  },
  printColorAdjust: {
    type: 'keyword',
    keywords: ['economy', 'exact'],
  },
  resize: {
    type: 'keyword',
    keywords: ['none', 'both', 'horizontal', 'vertical', 'block', 'inline'],
  },
  rubyAlign: {
    type: 'keyword',
    keywords: ['start', 'center', 'space-between', 'space-around'],
  },
  rubyPosition: {
    type: 'keyword',
    keywords: ['over', 'under', 'inter-character', 'alternate'],
  },
  scrollBehavior: {
    type: 'keyword',
    keywords: ['auto', 'smooth'],
  },
  scrollbarWIdth: {
    type: 'keyword',
    keywords: ['auto', 'thin', 'none'],
  },
  tableLayout: {
    // TODO: Only have control appear when display: table
    type: 'keyword',
    keywords: ['auto', 'fixed'],
  },
  textAlign: {
    type: 'keyword',
    keywords: [
      'start',
      'end',
      'left',
      'right',
      'center',
      'justify',
      'justify-all',
      'match-parent',
    ],
  },
  textAlignLast: {
    type: 'keyword',
    keywords: [
      'auto',
      'start',
      'end',
      'left',
      'right',
      'center',
      'justify',
      'justify-all',
      'match-parent',
    ],
  },
  textDecorationLine: {
    type: 'keyword',
    keywords: [
      'none',
      'underline',
      'overline',
      'line-through',
      'blink',
      'underline line-through',
      'underline overline',
      'overline line-through',
      'underline overline line-through',
    ],
  },
  textDecorationSkipInk: {
    type: 'keyword',
    keywords: ['none', 'auto', 'all'],
  },
  textDecorationStyle: {
    type: 'keyword',
    keywords: ['solid', 'double', 'dotted', 'dashed', 'wavy'],
  },
  textEmphasisPosition: {
    type: 'keyword',
    keywords: [
      'over right',
      'over left',
      'under right',
      'under left',
      'left over',
      'right under',
      'left under',
    ],
  },
  textJustify: {
    type: 'keyword',
    keywords: ['none', 'auto', 'inter-word', 'inter-character', 'distribute'],
  },
  textOrientation: {
    type: 'keyword',
    keywords: [
      'mixed',
      'upright',
      'sideways-right',
      'sideways',
      'use-glyph-orientation',
    ],
  },
  textRendering: {
    type: 'keyword',
    keywords: [
      'auto',
      'optimizeSpeed',
      'optimzeLegibility',
      'geometricPrecision',
    ],
  },
  textTransform: {
    type: 'keyword',
    keywords: [
      'none',
      'capitalize',
      'uppercase',
      'lowercase',
      'full-width',
      'full-size-kana',
    ],
  },
  textUnderlinePosition: {
    type: 'keyword',
    keywords: ['auto', 'under', 'left', 'right', 'under left', 'right under'],
  },
  touchAction: {
    type: 'keyword',
    keywords: [
      'auto',
      'none',
      'pan-x',
      'pan-left',
      'pan-right',
      'pan-y',
      'pan-up',
      'pan-down',
      'pinch-zoom',
      'manipulation',
    ],
  },
  transformBox: {
    type: 'keyword',
    keywords: [
      'content-box',
      'border-box',
      'fill-box',
      'stroke-box',
      'view-box',
    ],
  },
  transformStyle: {
    type: 'keyword',
    keywords: ['flat', 'preserve-3d'],
  },
  // TODO array of time values
  transitionDelay: { type: 'time' },
  transitionDuration: { type: 'time' },
  // TODO this should be a combobox
  transitionProperty: { type: 'keyword', keywords: ANIMATABLE_PROPERTIES },
  transitionTimingFunction: { type: 'easing-function' },
  unicodeBidi: {
    type: 'keyword',
    keywords: [
      'normal',
      'embed',
      'isolate',
      'bidi-override',
      'isolate-override',
      'plaintext',
    ],
  },
  userSelect: {
    type: 'keyword',
    keywords: ['none', 'auto', 'text', 'contain', 'all'],
  },
  visibility: {
    type: 'keyword',
    keywords: ['visible', 'hidden', 'collapse'],
  },
  whiteSpace: {
    type: 'keyword',
    keywords: [
      'normal',
      'nowrap',
      'pre',
      'pre-wrap',
      'pre-line',
      'break-spaces',
    ],
  },
  wordBreak: {
    type: 'keyword',
    keywords: ['normal', 'break-all', 'keep-all', 'break-word'],
  },
  writingMode: {
    type: 'keyword',
    keywords: ['horizontal-tb', 'vertical-rl', 'vertical-lr'],
  },
  width: {
    type: 'length',
    percentage: true,
    keywords: ['max-content', 'min-content', 'auto'],
  },
  zIndex: {
    type: 'number',
    keywords: ['auto'],
  },
}
