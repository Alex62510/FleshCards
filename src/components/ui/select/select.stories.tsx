import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'

import { Select, SelectProps } from './select'

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
      <Select onValueChange={setValue} options={['1', '2']} placeholder={'select'} value={value} />
    )
  },
}
export const SmallWithLongItemNames = {
  args: {
    disabled: false,
    options: ['1', '2', '3'],
    placeholder: 'Все курсы',
  },

  render: (args: JSX.IntrinsicAttributes & SelectProps) => {
    const [value, setValue] = useState('')

    return (
      <div>
        <div style={{ width: 200 }}>
          <Select {...args} onValueChange={setValue} value={value} />
        </div>
        <div>Selected value: {value}</div>
      </div>
    )
  },
}
