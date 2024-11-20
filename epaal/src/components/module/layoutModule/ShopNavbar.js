'use client';

// components
import BurgerMenu from '@/components/module/layoutModule/BurgerMenu';
import NavElements from '@/components/module/layoutModule/NavElements';

// logo
import EvaamLogo from '@/../public/icons/evaam-icon';

//react
import { useCallback, useEffect, useState } from 'react';

export default function ShopNavbar() {
  const [scrollY, setScrollY] = useState(0);
  const [navColor, setNavColor] = useState(false);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(pageYOffset);
    if (pageYOffset > 75) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, []);

  return (
    <div
      className={`sticky top-0 flex w-full flex-col ${navColor ? 'bg-white' : 'bg-[#2852E4]'} z-10 mx-auto max-w-full md:bg-white`}
    >
      <div className='flex w-full items-center justify-between'>
        <div className='relative flex items-center justify-evenly pr-3 md:w-1/2'>
          <BurgerMenu navColor={navColor} />
          <div className='hidden cursor-pointer md:flex'>
            <EvaamLogo color='#2852E4' height='24px' width='24px' />
          </div>
          <div className='cursor-pointer pr-3 md:hidden'>
            <EvaamLogo
              color={navColor ? '#000' : '#ffff'}
              height='24px'
              width='24px'
            />
          </div>
          {/* <NavElements links={links} /> */}
        </div>
        <div className='p-[12px]'>
          <div
            className={`px-[18px] py-[11.5px] text-xs ${navColor ? 'bg-[#2852E4]' : 'bg-white'} ${navColor ? 'text-white' : 'text-black'} rounded-lg md:bg-[#2852E4] md:text-white`}
          >
            ورود به حساب کاربری
          </div>
        </div>
      </div>
    </div>
  );
}
