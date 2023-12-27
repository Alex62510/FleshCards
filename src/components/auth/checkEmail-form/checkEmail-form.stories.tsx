import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './checkEmail-form'

const meta = {
  args: {
    email: 'example@mail.com',
  },
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/Check email',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
