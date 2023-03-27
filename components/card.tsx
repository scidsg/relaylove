import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  imagePath?: string;
};

const Card = ({ children, imagePath }: Props) => {
  return (
    <div className='bg-lightPurple p-5 md:p-20 m-7 sm:m-7 md:m-20 rounded-lg'>

      <div>{children}</div>
    
      {imagePath && <Image className='w-full p-0 pt-3 sm:p-5 md:p-10 lg:p-70' src={imagePath} alt="Card Image" width={100} height={100} />}
      
    </div>
  );
};

export default Card;
