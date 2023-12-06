import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textFeld'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, { message: 'Invalid password' }),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>
export const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: undefined,
    },
    resolver: zodResolver(loginSchema),
  })
  // const onSubmit = (data: FormValues) => {
  //   console.log(data)
  // }

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'password'}
        />
        <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
