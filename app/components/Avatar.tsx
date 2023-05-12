'use client';

import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
      <Image
        className="rounded-full"
        src={'/images/placeholder.jpg'}
        height={30}
        width={30}
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
