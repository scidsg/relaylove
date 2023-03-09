// this is the header. name changed to "Top" to avoid collision 

import Image from 'next/image';

// TODO: this should be a dynamic component
const ButtonA = () => {
  return (
    <>

    {/* <div className='invisible sm:visible flex flex-row p-3 row-start-1 row-end-2 bg-darkPurple m-3 -mt-1 rounded-xl content-center justify-center hover:bg-lightPurple hover:border-b-4 border-white transition duration-150 ease-in-out'>
        
        <p className='flex-initial m-0 text-right mr-3 text-xl align-middle '>انسخ المشروع</p>
        
        <Image
        className='flex-initial w-7 m-0'
        src="/images/github.svg"
        alt="Github Icon"
        width={10}
        height={10}
        />

    </div> */}

    <button className="bg-darkPurple py-2 px-4 rounded-xl inline-flex items-center  hover:bg-lightPurple hover:border-2 border-white transition duration-50 mb-2">

        <span>انسخ المشروع</span>

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

export default ButtonA;
