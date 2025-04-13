'use client';
import { useTasks } from '@/context/taskContext';
import { useUserContext } from '@/context/userContext';
import { github, moon, profile } from '@/utils/Icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();

  const router = useRouter();

  const { name } = user;

  const userId = user._id;
  // bg-[#f9f9f9]
  return (
    <header className='pr-6 min-h-[4rem] w-full flex items-center'>
      <div>
        <h1 className='text-lg font-medium'>
          <span role='img' aria-label='wave'>
            👋
          </span>
          {userId ? `Welcome, ${name}!` : 'Welcome to Tasketer'}
        </h1>
        <p className='text-sm'>
          {userId ? (
            <>
              You have{' '}
              <span className='font-bold text-[#3aafae]'>
                {activeTasks.length}
              </span>
              &nbsp;active tasks
            </>
          ) : (
            'Please login or register to view your tasks'
          )}
        </p>
      </div>

      <button
        className='px-8 py-3 ml-auto bg-[#3aafae] text-white rounded-[50px]
          hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out'
        onClick={() => {
          if (userId) {
            openModalForAdd();
          } else {
            router.push('/login');
          }
        }}
      >
        {userId ? 'Add a new Task' : 'Login / Register'}
      </button>

      <div className='flex gap-4 items-center w-[18.5rem] justify-end'>
        <Link
          href='https://github.com/Maclinz/taskfyer'
          passHref
          target='_blank'
          rel='noopener noreferrer'
          className='h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]'
        >
          {github}
        </Link>
        <Link
          href='https://github.com/Maclinz/taskfyer'
          passHref
          target='_blank'
          rel='noopener noreferrer'
          className='h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]'
        >
          {moon}
        </Link>
        <Link
          href='https://github.com/Maclinz/taskfyer'
          passHref
          target='_blank'
          rel='noopener noreferrer'
          className='h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]'
        >
          {profile}
        </Link>
      </div>
    </header>
  );
}

export default Header;
