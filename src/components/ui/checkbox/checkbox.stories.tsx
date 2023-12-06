import { useState } from 'react'

import { VerticalContainer } from '@/utils/containers/vertical'
import { ValuePreview } from '@/utils/preview/preview'
import { Meta } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'

import { Checkbox, CheckboxProps } from './checkbox'

export default {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Data Entry/Checkbox',
} as Meta<typeof Checkbox>

export const Default = {
  args: {
    disabled: false,
    label: '',
  },

  render: (args: JSX.IntrinsicAttributes & CheckboxProps) => {
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onValueChange={setChecked} />
        {/*<ValuePreview>checked: {String(checked)}</ValuePreview>*/}
      </VerticalContainer>
    )
  },
}
export const Disable = {
  args: {
    disabled: false,
    label: '',
  },

  render: (args: JSX.IntrinsicAttributes & CheckboxProps) => {
    return (
      <VerticalContainer>
        <Checkbox {...args} checked={false} disabled />
        {/*<ValuePreview>checked: {String(checked)}</ValuePreview>*/}
      </VerticalContainer>
    )
  },
}
export const DefaultWhithLabel = {
  args: {
    disabled: false,
    label: 'Click here',
  },

  render: (args: JSX.IntrinsicAttributes & CheckboxProps) => {
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onValueChange={setChecked} />
        <ValuePreview>checked: {String(checked)}</ValuePreview>
      </VerticalContainer>
    )
  },
}
