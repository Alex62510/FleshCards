import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled/controlled-textfield/controlled-textfield'
import { Button } from '@/components/ui'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-form.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
export const Forgot = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <SimpleCard className={s.card}>
        <Typography.H1 className={s.title}>Forgot your password?</Typography.H1>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Email'}
            />
            <Typography.Body2
              className={s.textInstruction}
            >{`Enter your email address and we will send you further instructions`}</Typography.Body2>
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography.Body2
          className={s.caption}
        >{`Did you remember your password?`}</Typography.Body2>
        <Typography.Link className={s.signUpLink} to={'/sign-in'}>
          Try logging in
        </Typography.Link>
      </SimpleCard>
    </>
  )
}
