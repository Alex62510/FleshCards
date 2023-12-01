import { useState } from 'react'

import { Meta } from '@storybook/react'

import { TextField } from '../textFeld/textField.tsx'

import { Eye } from '@/assets/icons/eye.tsx'

export default {
  title: 'Components/Data Entry/Text Field',
  component: TextField,
  tags: ['autodocs'],
} as Meta<typeof TextField>

export const Primary = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    error: false,
    disabled: false,
  },
}
export const WithIcon = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    iconEnd: <Eye fill={'var(--color-dark-100)'} />,
    error: false,
    disabled: false,
  },
}

export const Search = {
  args: {
    placeholder: 'Input search',
    search: true,
    error: false,
    disabled: false,
  },
}

export const SearchChangeValue = {
  render: () => {
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          placeholder={'Input search'}
          search={true}
          value={text}
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
        />
      </>
    )
  },
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
}
export const VisiableValue = {
  render: () => {
    const [showText, setShowText] = useState(true)
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          placeholder={'Input search'}
          onDoubleClick={() => {
            setShowText(!showText)
          }}
          search={true}
          value={showText ? text : '---'}
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
        />
      </>
    )
  },
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
}

export const Invalid = {
  render: () => {
    return (
      <TextField value="some value" label="some label" error={true} errorMessage="Error mesage" />
    )
  },
}
