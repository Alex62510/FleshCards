import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { JSX } from 'react/jsx-runtime'

export const Card = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...rest }, ref): JSX.Element => {
    return <div ref={ref} className={className} {...rest}></div>
  }
)
