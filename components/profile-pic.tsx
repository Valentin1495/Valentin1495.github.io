'use client';

import Image from 'next/image';
import UserDropdown from './user-dropdown';
import { useRef, useState, useEffect } from 'react';

export default function ProfilePic({ user }: { user: UserInfo }) {
  const { image } = user;
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        imgRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !imgRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='relative h-10'>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={`border-4 transition-colors rounded-full ${
          show ? 'border-sky-300' : 'border-transparent hover:border-sky-200'
        }`}
      >
        <Image
          ref={imgRef}
          src={image}
          alt='Profile pic'
          width={40}
          height={40}
          className='object-cover rounded-full'
        />
      </button>

      <UserDropdown
        user={user}
        show={show}
        setShow={setShow}
        dropdownRef={dropdownRef}
      />
    </div>
  );
}
