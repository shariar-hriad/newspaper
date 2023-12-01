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

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

const LoginForm = () => {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    return (
        <div className='mx-auto max-w-xl bg-gray-800 p-5 lg:p-10 rounded-md'>
            <h3 className='font-medium text-2xl lg:text-4xl text-white text-center'>
                Login with Email
            </h3>

            <Form {...form}>
                <form action='' className='space-y-5'>
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

                    <div className='flex justify-between items-center'>
                        <Button variant='secondary' size='lg' type='submit'>
                            Login
                        </Button>

                        <Link
                            className={buttonVariants({ variant: 'link' })}
                            to='/'
                        >
                            Back to Home
                        </Link>
                    </div>

                    <p className='text-sm text-gray-500'>
                        Dont't have an account?
                        <Link
                            className={buttonVariants({ variant: 'link' })}
                            to='/signup'
                        >
                            Signup here
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    )
}

export default LoginForm
