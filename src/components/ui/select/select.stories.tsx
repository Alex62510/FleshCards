import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'

import { Select, SelectProps } from './select.tsx'

const meta = {
  argTypes: {
    title: { control: { type: 'text' } },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>
export const SelectBox: Story = {
  args: {
    options: ['hi', 'by', 'how are you?'],
    title: 'Select-box',
  },
  render: () => {
    return <Select options={['hi', 'by', 'how are you?']} placeholder={'select'} />
  },
}

export const ControlledSelect: Story = {
  args: {
    options: ['hi', 'by', 'how are you?'],
    title: 'Select-box',
  },
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select options={['1', '2']} value={value} onValueChange={setValue} placeholder={'select'} />
    )
  },
}
export const SmallWithLongItemNames = {
  render: (args: JSX.IntrinsicAttributes & SelectProps) => {
    const [value, setValue] = useState('')

    return (
      <div>
        <div style={{ width: 200 }}>
          <Select {...args} value={value} onValueChange={setValue} />
        </div>
        <div>Selected value: {value}</div>
      </div>
    )
  },

  args: {
    placeholder: 'Все курсы',
    disabled: false,
    options: ['1', '2', '3'],
  },
}
