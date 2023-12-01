import { ComponentProps, forwardRef, ReactNode, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import { Search as SearchIcon } from '../../../assets/icons/search.tsx'
import { Label } from '../label/label.tsx'
import { Typography } from '../typography/typography.tsx'

import s from './textField.module.scss'

import { Close } from '@/assets/icons/Close.tsx'

export type TextFieldProps = {
  value?: string
  label?: ReactNode
  error?: boolean
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  search?: boolean
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearClick?: () => void
} & ComponentProps<'input'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      onEnter,
      onKeyDown,
      className,
      errorMessage,
      iconEnd,
      iconStart,
      search,
      onClearClick,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0

    if (search) {
      iconStart = <SearchIcon width={20} height={20} fill={'var(--color-dark-100)'} />
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }
    const classNames = {
      root: clsx(s.box, className),
      label: s.label,
      input: clsx(s.input, showError && s.error),
      iconStart: s.iconStart,
      iconEnd: s.iconEnd,
      inputContainer: s.inputContainer,
      clearButton: s.clearButton,
    }

    const isShowClearButton = onClearClick && rest?.value?.length! > 0

    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd || isShowClearButton ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        <Label label={label}>
          <div className={classNames.inputContainer}>
            {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
            <input
              className={classNames.input}
              type="text"
              ref={ref}
              data-icon={dataIcon}
              onKeyDown={handleKeyDown}
              {...rest}
            />
            {isShowClearButton && (
              <button className={classNames.clearButton} onClick={onClearClick} type="button">
                {<Close width={20} height={20} color={'var(--color-info-500)'} />}
              </button>
            )}
            {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
          </div>
        </Label>

        {showError && <Typography.Error>{errorMessage}</Typography.Error>}
      </div>
    )
  }
)
