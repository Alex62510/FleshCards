import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { JSX } from 'react/jsx-runtime'

import s from './select.module.scss'

export type SelectProps = {
  options: string[]
  placeholder?: string
  title?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ options, placeholder, title, ...rest }, ref): JSX.Element => {
    const mappedItems = options.map((e, id) => (
      <SelectRadix.Item className={s.item} key={id} value={e}>
        <SelectRadix.ItemText>{e}</SelectRadix.ItemText>
        <SelectRadix.ItemIndicator className={s.selected} />
      </SelectRadix.Item>
    ))

    return (
      <div className={s.wrapper}>
        <label className={s.title}>
          <Typography.Body1> {title}</Typography.Body1>
          <SelectRadix.Root {...rest}>
            <SelectRadix.Trigger className={s.trigger}>
              <SelectRadix.Value placeholder={placeholder} />
              <SelectRadix.Icon>
                <ChevronDownIcon className={s.icon} />
              </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
              <SelectRadix.Content
                className={s.selectContent}
                collisionPadding={0}
                position={'popper'}
                ref={ref}
              >
                <SelectRadix.Viewport className={s.viewport}>{mappedItems}</SelectRadix.Viewport>
              </SelectRadix.Content>
            </SelectRadix.Portal>
          </SelectRadix.Root>
        </label>
      </div>
    )
  }
)
