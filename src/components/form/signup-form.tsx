import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as z from 'zod'

import { Button, buttonVariants } from '../ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

const signupFormSchema = z.object({
    email: z.string().email({ message: 'Invalid email address!' }),
    password: z
        .string()
        .min(6, { message: 'Password is too short! Minimum 6 characters' })
        .max(16, { message: 'Password must be at least 16 characters' }),
    displayName: z
        .string()
        .min(4, { message: 'Display name is must be at least 4 characters' })
        .max(30, { message: 'Display name is must be at least 30 characters' }),
})

const SignupForm = () => {
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            email: '',
            password: '',
            displayName: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {
        console.log(values)
    }

    return (
        <div className='mx-auto max-w-xl bg-gray-800 p-5 lg:p-10 rounded-md'>
            <h3 className='font-medium text-2xl lg:text-4xl text-white text-center mb-3 lg:mb-5'>
                Signup with Email
            </h3>

            <p className='text-sm text-gray-500'>
                Already have an account?
                <Link
                    className={buttonVariants({ variant: 'link' })}
                    to='/login'
                >
                    Login
                </Link>
            </p>

            <Separator className='my-4' />

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-5'
                >
                    <FormField
                        control={form.control}
                        name='displayName'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white text-sm'>
                                    Display Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Enter your full name'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white text-sm'>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Enter your email address'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white text-sm'>
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button variant='secondary' size='lg' type='submit'>
                        Create Account
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignupForm
