import Head from 'next/head';
import { ReactNode } from 'react';
import Nav from './Nav';
import Snowflake from './Snowflake';
import grid from '@/styles/grid.module.css';
import heading from '@/styles/headings.module.css';
import list from '@/styles/List.module.css';
import Link from 'next/link'



type LayoutProps = {
  readonly children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Glenn Sorrentino" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A Temporary Snowflake Proxy" />

        <title>A Temporary Snowflake Proxy</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/images/favicon/favicon.ico"
        />
      </Head>

      <Nav></Nav>
      <div className='bg-darkPurple'>
        <div className={grid.gridTwelve}>
        <Snowflake></Snowflake>

        <div className="p-16 md:p-0 md:col-end-8 md:col-start-5 md:row-start-1 mt-5 md:pr-6 lg:p-0">
          <h2 className={heading.headingTwo}>شارك حرية الانترنت</h2>
          <ul className={list.List}>
            <li className={list.Items}>اضغط الزر</li>
            <li className={list.Items}>لا تغلق الصفحة</li>
            <li className={list.Items}>عد لتفقد كم شخصًا ساعدت!</li>
          </ul>
        </div>

        <div className="p-16 md:p-0 text-right w-full md:col-start-13 md:col-end-1 md:mr-0 md:row-start-2 lg:col-end-4 lg:col-start-1 lg:row-start-1 mt-5">
          <p className='fontSize-5xl'>
          يمكنك مساعدة الأشخاص على تجاوز الرقابة من خلال تمكين وكيل سنوفليك على يمينك. بمجرد أن تتحول أيقونة ندفة الثلج إلى اللون الأخضر، فهذا يعني أن المستخدم في بلد خاضع للرقابة يتصل من خلال وكيلك للوصول إلى الإنترنت دون قيود.
          </p>
          <br></br>

          <p>هذا المشروع مستضاف من قبل <Link className='underline' href="https://josa.ngo/">جوسا</Link> عن طريق <Link className='underline' href="https://www.torproject.org/">مشروع تور</Link></p>
        </div>

        </div>
      </div>
      
    
    </>
  );
};

export default Layout;
