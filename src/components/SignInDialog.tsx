import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { Button } from './ui/Button';
import UserAuthForm from './UserAuthForm';
import { FC } from 'react';

interface SignInDialogProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SignInDialog: FC<SignInDialogProps> = ({ className }) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <Button variant='default'>Sign In</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[70%] gap-y-12 rounded-md sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-semibold tracking-tight'>
            Welcome 🎉
          </DialogTitle>
          <DialogDescription className='max-w-xs text-sm'>
            Sign in to your account with Google.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='flex flex-row items-center justify-center gap-y-2'>
          {/* <p className='px-8 text-center text-sm text-muted-foreground'>
            New to Wisp Hub?{' '}
            <Link
              href='/sign-up'
              className='hover:text-brand text-sm underline underline-offset-4'
            >
              Sign Up
            </Link>
          </p> */}
          <div className='w-3/5 sm:w-1/3'>
            <UserAuthForm className={className} />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
