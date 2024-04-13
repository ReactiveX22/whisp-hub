'use client';

import { cn } from '@/lib/utils';
import { Icons } from './Icons';
import { Button } from './ui/Button';
import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from '@/hooks/use-toast';
import { usePathname } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname() || '/';

  const loginWithGoogle = async () => {
    setIsLoading(true);

    let callbackUrl = '/';

    if (pathname !== '/sign-in') {
      callbackUrl = pathname;
    }

    try {
      await signIn('google', { callbackUrl: callbackUrl });
    } catch (error) {
      //toast notification
      toast({
        title: 'Error Sign In',
        description: 'There was an error with sign in. Please try again later',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        isLoading={isLoading}
        type='button'
        size='sm'
        className='w-full'
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? null : <Icons.google className='mr-2 h-4 w-4' />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
