import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileForm } from './savePersonalInfo'

const meta = {
  component: EditProfileForm,
  tags: ['autodocs'],
  title: 'Profile/Save Personal information',
} satisfies Meta<typeof EditProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { avatar: 'https://picsum.photos/201', className: 'save', initialValue: 'Alex' },
}
