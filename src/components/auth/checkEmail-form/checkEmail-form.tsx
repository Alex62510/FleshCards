import Email from '@/assets/icons/email'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'

import s from './checkEmail-form.module.scss'

import { Button } from '../../ui'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  const message = `We've sent an e-mail with instructions to ${email}`

  return (
    <SimpleCard className={s.card}>
      <Typography.Large className={s.title}>Check your email</Typography.Large>
      <div className={s.iconContainer}>
        <Email />
      </div>
      <Typography.Body2 className={s.instructions}>{message}</Typography.Body2>
      <Button as={'a'} className={s.button} fullWidth href={'/sing-in'}>
        Back to Sign in
      </Button>
    </SimpleCard>
  )
}
