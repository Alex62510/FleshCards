import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Search } from '@/assets/icons'
import Eye from '@/assets/icons/eye'
import VisibilityOff from '@/assets/icons/visibilityOff'
import { clsx } from 'clsx'

import s from './textField.module.scss'

import { Typography } from '../typography/typography'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onValueChange?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      label,
      labelProps,
      onChange,
      onValueChange,
      placeholder,
      search,
      type,
      ...restProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordButtonShown = type === 'password'

    const finalType = getFinalType(type, showPassword)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, !!errorMessage && s.error, search && s.hasLeadingIcon, className),
      fieldContainer: clsx(s.fieldContainer),
      label: clsx(s.label, labelProps?.className),
      leadingIcon: s.leadingIcon,
      root: clsx(s.root, containerProps?.className),
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography.Body1 as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography.Body1>
        )}
        <div className={classNames.fieldContainer}>
          {search && <Search className={classNames.leadingIcon} />}
          <input
            className={classNames.field}
            onChange={handleChange}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            {...restProps}
          />
          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
        </div>

        <Typography.Error className={classNames.error} variant={'error'}>
          {errorMessage}
        </Typography.Error>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
