import { DeleteForever } from '@/assets/icons/DeleteForever'
import { Edit } from '@/assets/icons/Edit'
import { ToolbarProps } from '@/components/ui/dropdown/dropdown'
import { Meta } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'

import { Dropdown, ToolbarItemWithIcon } from './dropdown'

export default {
  component: Dropdown,
  title: 'Components/Disclosure/Dropdown',
} as Meta<typeof Dropdown>

export const Dark = {
  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
      </>
    ),
  },

  render: (args: JSX.IntrinsicAttributes & ToolbarProps) => {
    return <Dropdown {...args} />
  },
}

export const Light = {
  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
      </>
    ),
  },

  render: (args: JSX.IntrinsicAttributes & ToolbarProps) => {
    return <Dropdown {...args} />
  },
}
