'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

function DropdownMenu({ children, title }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className='container flex flex-col transition-all duration-1000 ease-in-out'>
      <div
        className='container flex cursor-pointer content-center items-center justify-between p-4 transition-all duration-300 ease-in-out'
        onClick={() => setExpanded(!expanded)}
      >
        <p className=''>{title}</p>
        {expanded ? (
          <ChevronDownIcon className='h-4 w-4' />
        ) : (
          <ChevronUpIcon className='h-4 w-4' />
        )}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${expanded ? '-z-10 h-0' : 'flex h-full flex-col gap-2 px-8 py-4 text-gray-500'}`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropdownMenu;
