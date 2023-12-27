import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled/controlled-textfield/controlled-textfield'
import { Button } from '@/components/ui'
import { SimpleCard } from '@/components/ui/simpleCard'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './singUp-form.module.scss'

const schema = z
  .object({
    confirmPassword: z.string().nonempty('Confirm your password'),
    email: z.string().email('Invalid email address').nonempty('Enter email'),
    password: z.string().min(5, { message: 'Invalid password' }).nonempty('Confirm your password'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      })
    }

    return data
  })

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
export const SignUp = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <SimpleCard className={s.card}>
        <Typography.H1 className={s.title}>Sign Up</Typography.H1>
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
            <ControlledTextField
              control={control}
              label={'Confirm Password'}
              name={'confirmPassword'}
              placeholder={'Confirm Password'}
              type={'password'}
            />
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography.Body2 className={s.caption}>{`Already have an account?`}</Typography.Body2>
        <Typography.Link className={s.signUpLink} to={'/sign-in'}>
          Sign In
        </Typography.Link>
      </SimpleCard>
    </>
  )
}
