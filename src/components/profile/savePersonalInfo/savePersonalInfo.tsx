import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled/controlled-textfield/controlled-textfield'
import { Button } from '@/components/ui'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'
import cn from 'classnames'

import s from './savePersonalInfo.module.scss'

export interface EditProfileValues {
  username: string
}

interface Props {
  avatar?: string
  className?: string
  initialValue: string
  onSubmit: (data: EditProfileValues) => void
}

export const EditProfileForm = ({ avatar, className, initialValue, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<EditProfileValues>()

  return (
    <div>
      <SimpleCard className={s.card}>
        <Typography.Large className={s.title}>Personal Information</Typography.Large>
        <form className={cn(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
          <img alt={'avatar'} className={s.img} src={avatar} />
          <ControlledTextField
            className={s.nickname}
            control={control}
            defaultValue={initialValue}
            label={'Nickname'}
            name={'username'}
          />
          <Button fullWidth type={'submit'}>
            Save changes
          </Button>
        </form>
      </SimpleCard>
    </div>
  )
}
