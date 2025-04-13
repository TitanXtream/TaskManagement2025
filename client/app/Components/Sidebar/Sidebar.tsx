import React from 'react';
import Profile from '../Profile/Profile';
import RadialChart from '../RadialChart/RadialChart';
import { useUserContext } from '@/context/userContext';
// bg-[#f9f9f9]
function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className='w-[20rem] right-0 top-0 flex flex-col overflow-auto'>
      <Profile />
      <div className='mx-6 mb-6'>
        <RadialChart />
      </div>

      <button
        className='mx-6 py-4 mt-auto px-8 bg-[#EB4E31] text-white rounded-[50px] hover:bg-[#3aafae] transition duration-200 ease-in-out'
        onClick={logoutUser}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
