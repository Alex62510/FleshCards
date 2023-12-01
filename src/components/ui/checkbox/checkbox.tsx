import { ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './checkbox.module.scss'

import Check from '@/assets/icons/check/check.tsx'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onValueChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, onValueChange, disabled, position, className, required, label, id }, ref) => {
    const classNames = {
      container: clsx(s.container, className),
      buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
      root: s.root,
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled),
    }

    return (
      <div className={classNames.container}>
        <LabelRadix.Root className={classNames.label}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              ref={ref}
              className={classNames.root}
              checked={checked}
              onCheckedChange={onValueChange}
              disabled={disabled}
              required={required}
              id={id}
            >
              <AnimatePresence initial={false}>
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} asChild forceMount>
                    <motion.div
                      variants={{
                        unchecked: { scale: 0.5 },
                        checked: { scale: 1 },
                      }}
                      initial="unchecked"
                      animate="checked"
                      exit="unchecked"
                    >
                      <motion.div
                        variants={{
                          unchecked: {
                            opacity: 0,
                            transition: { duration: 0.1 },
                          },
                          checked: {
                            opacity: 1,
                            strokeDashoffset: 0,
                            transition: { duration: 0.1 },
                          },
                        }}
                      >
                        <Check size={18} color={'var(--color-text-primary)'} />
                      </motion.div>
                    </motion.div>
                  </CheckboxRadix.Indicator>
                )}
              </AnimatePresence>
            </CheckboxRadix.Root>
          </div>
          {label}
        </LabelRadix.Root>
      </div>
    )
  }
)
