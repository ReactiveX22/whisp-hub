import { Icons } from '@/components/Icons';
import UserAuthForm from '@/components/UserAuthForm';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
        <p className='mx-auto max-w-xs text-sm'>
          Create your Wisp Hub account.
        </p>
      </div>
      <UserAuthForm />
      <p className='text-muted-foreground px-8 text-center text-sm'>
        Already have an account?{' '}
        <Link
          href='/sign-in'
          className='hover:text-brand text-sm underline underline-offset-4'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
