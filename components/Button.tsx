// this is the header. name changed to "Top" to avoid collision 

import Image from 'next/image';

// TODO: this should be a dynamic component
const Button = () => {
  return (
    <>

    <button className="sm:bg-darkPurple py-2 px-4 rounded-xl inline-flex items-center hover:bg-lightPurple hover:border-2 border-white  mb-2">

        <span className='hidden sm:block' >انسخ المشروع</span>

        <Image
            className='flex-initial w-7 m-0 ml-3'
            src="/images/github.svg"
            alt="Github Icon"
            width={10}
            height={10}
            />
    
    </button>
      
      
    </>
  );
};

export default Button;
