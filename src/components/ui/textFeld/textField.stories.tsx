import { useState } from 'react'

import { Eye } from '@/assets/icons/eye'
import { Meta } from '@storybook/react'

import { TextField } from '../textFeld/textField'

export default {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/Data Entry/Text Field',
} as Meta<typeof TextField>

export const Primary = {
  args: {
    disabled: false,
    error: false,
    label: 'Input',
    placeholder: 'Input',
  },
}
export const WithIcon = {
  args: {
    disabled: false,
    error: false,
    iconEnd: <Eye fill={'var(--color-dark-100)'} />,
    label: 'Input',
    placeholder: 'Input',
  },
}

export const Search = {
  args: {
    disabled: false,
    error: false,
    placeholder: 'Input search',
    search: true,
  },
}

export const SearchChangeValue = {
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
  render: () => {
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
          placeholder={'Input search'}
          search
          value={text}
        />
      </>
    )
  },
}
export const VisiableValue = {
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
  render: () => {
    const [showText, setShowText] = useState(true)
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
          onDoubleClick={() => {
            setShowText(!showText)
          }}
          placeholder={'Input search'}
          search
          value={showText ? text : '---'}
        />
      </>
    )
  },
}

export const Invalid = {
  render: () => {
    return (
      <TextField error errorMessage={'Error mesage'} label={'some label'} value={'some value'} />
    )
  },
}
