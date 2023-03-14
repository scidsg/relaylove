// this is the header. name changed to "Top" to avoid collision 

import Link from 'next/link'
import heading from '@/styles/headings.module.css'
import grid from '@/styles/grid.module.css';
import Button from '@/components/Button';


const Nav = () => {
  return (
    <>


        <div className='bg-lightPurple pt-1 -pb-1 sm:pt-3 -pb-1'>

            <div className={grid.gridTwelve}>
            <h1 className={heading.headingOne}>سنوفليك</h1>

            <div className='sm:col-start-1 sm:col-end-5 lg:col-end-4 row-start-1 justify-center'>
                <Link href={'https://github.com/glenn-sorrentino/relay.love'}><Button></Button></Link>
            </div>

            </div>

            

        </div>
      
    </>
  );
};

export default Nav;
