import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './personalInfo'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/Personal information',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: 'https://picsum.photos/201',
    email: 'your_email@gmail.com',
    name: 'Alex',
    onAvatarChange: () => {
      console.info('avatar changed')
    },
    onLogout: () => {
      console.info('logout')
    },
    onNameChange: () => {
      console.info('name changed')
    },
  },
}
