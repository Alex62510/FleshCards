import { ComponentProps, ElementType, FC, JSXElementConstructor, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, 'ref'>
  : never
export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

export type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  component?: Ttag
  className?: string
  mb?: number | string
  mt?: number | string
  mr?: number | string
  ml?: number | string
  mx?: number | string
  my?: number | string
} & PropsOf<Ttag>

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, component, className, style, mr, ml, mt, mb, mx, my, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)

    const styles = {
      ...(mr && { marginRight: mr }),
      ...(ml && { marginLeft: ml }),
      ...(mt && { marginTop: mt }),
      ...(mb && { marginBottom: mb }),
      ...(mx && { marginRight: mx, marginLeft: mx }),
      ...(my && { marginTop: my, marginBottom: my }),
      ...style,
    }

    return (
      <Component className={classNames} style={styles} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Large: createTypographyComponent('large'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  Body1: createTypographyComponent('body1'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Body2: createTypographyComponent('body2'),
  Subtitle2: createTypographyComponent('subtitle2'),
  Caption: createTypographyComponent('caption'),
  Overline: createTypographyComponent('overline'),
  Link: createTypographyComponent('link'),
  CaptionLink: createTypographyComponent('captionLink'),
  SubtitleLink: createTypographyComponent('subtitleLink'),
  CaptionBold: createTypographyComponent('captionBold'),
  Error: createTypographyComponent('error'),
}

const COMPONENTS = {
  large: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  subtitle1: 'p',
  body2: 'p',
  subtitle2: 'p',
  caption: 'caption',
  overline: 'p',
  link: 'a',
  captionLink: 'a',
  subtitleLink: 'span',
  captionBold: 'caption',
  error: 'span',
} as const

type Component = keyof typeof COMPONENTS
