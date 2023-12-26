import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio/radioGroup'

export type ControlledRadioGroupProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
} & Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({ control, name })

  return (
    <RadioGroup
      {...rest}
      {...field}
      errorMessage={error?.message}
      id={name}
      onValueChange={onChange}
    />
  )
}
