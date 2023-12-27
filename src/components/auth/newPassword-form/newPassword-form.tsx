import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled/controlled-textfield/controlled-textfield'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './newPassword-form.module.scss'

import { Button } from '../../ui'

const schema = z.object({
  password: z.string().min(5, { message: 'Invalid password' }).nonempty('Enter password'),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const NewPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(schema),
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <SimpleCard className={s.card}>
        <Typography.Large className={s.title}>Create new password</Typography.Large>
        <form className={s.form} onSubmit={handleFormSubmitted}>
          <ControlledTextField
            containerProps={{ className: s.input }}
            control={control}
            label={'Password'}
            name={'password'}
            placeholder={'Password'}
            type={'password'}
          />
          <Typography.Body2 className={s.instructions}>
            Create new password and we will send you further instructions to email
          </Typography.Body2>
          <Button className={s.button} fullWidth type={'submit'}>
            Create new password
          </Button>
        </form>
      </SimpleCard>
    </>
  )
}
