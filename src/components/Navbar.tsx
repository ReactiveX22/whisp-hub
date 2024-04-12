import Link from 'next/link';
import { FC } from 'react';
import { Icons } from './Icons';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import { SignInDialog } from './SignInDialog';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getAuthSession();

  return (
    <div className='fixed inset-x-0 top-0 z-[10] h-fit w-screen border-b border-zinc-300 bg-zinc-100 py-2'>
      <div className='container mx-auto flex h-full max-w-7xl items-center justify-between gap-2'>
        <Link href='/' className='flex items-center gap-2'>
          <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-sm font-medium text-zinc-700 md:block'>
            Whisp Hub
          </p>
        </Link>

        {/* search bar */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <SignInDialog />

          // <Link href='/sign-in' className={buttonVariants()}>
          //   Sign In
          // </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
