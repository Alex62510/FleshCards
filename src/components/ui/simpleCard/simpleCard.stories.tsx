import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'
import { Typography } from '../typography'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography.Large>Card</Typography.Large>,
    style: {
      height: '300px',
      padding: '24px',
      width: '300px',
    },
  },
}
