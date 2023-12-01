import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textFeld'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox.tsx'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, { message: 'Invalid password' }),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>
export const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: undefined,
    },
  })

  console.log(errors)

  // const onSubmit = (data: FormValues) => {
  //   console.log(data)
  // }

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
        <TextField
          {...register('password')}
          label={'password'}
          errorMessage={errors.password?.message}
        />
        <ControlledCheckbox label={'Remember Me'} control={control} name={'rememberMe'} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
