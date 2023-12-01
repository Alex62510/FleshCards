import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onValueChange' | 'checked' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  disabled,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { value, onChange, ...field },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
    disabled,
  })

  return (
    <Checkbox
      {...checkboxProps}
      {...field}
      onValueChange={onChange}
      checked={value}
      id={name}
      disabled={disabled}
    />
  )
}
