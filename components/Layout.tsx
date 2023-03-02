import Head from 'next/head';
import { ReactNode } from 'react';

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
      <div>{children}</div>
    </>
  );
};

export default Layout;
