'use client';
import { useUserContext } from '@/context/userContext';
import React from 'react';

interface MainContentLayoutProps {
  children: React.ReactNode;
}

function MainContentLayout({ children }: MainContentLayoutProps) {
  const userId = useUserContext().user._id;
  return (
    <main
      className={`${userId ? '' : ''} pb-[1rem] flex h-[calc(100svh-4rem)]`}
    >
      {children}
    </main>
  );
}

export default MainContentLayout;
