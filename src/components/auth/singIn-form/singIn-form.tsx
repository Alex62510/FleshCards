import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-textfield/controlled-textfield'
import { Button } from '@/components/ui'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './singIn-form.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().min(5, { message: 'Invalid password' }).nonempty('Enter password'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
export const SignIn = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <SimpleCard className={s.card}>
        <Typography.H1 className={s.title}>Sign in</Typography.H1>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Email'}
            />
            <ControlledTextField
              control={control}
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />
          </div>
          <ControlledCheckbox
            className={s.checkbox}
            control={control}
            label={'Remember me'}
            name={'rememberMe'}
            position={'left'}
          />
          <Typography.Link
            className={s.recoverPasswordLink}
            to={'/recover-password'}
            variant={'body2'}
          >
            Forgot Password?
          </Typography.Link>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography.Body2 className={s.caption}>{`Don't have an account?`}</Typography.Body2>
        <Typography.Link className={s.signUpLink} to={'/sign-up'} variant={'link1'}>
          Sign Up
        </Typography.Link>
      </SimpleCard>
    </>
  )
}
