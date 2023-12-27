import type { Meta, StoryObj } from '@storybook/react'

import { Forgot } from './forgot-form'

const meta = {
  component: Forgot,
  tags: ['autodocs'],
  title: 'Auth/Forgot password',
} satisfies Meta<typeof Forgot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
