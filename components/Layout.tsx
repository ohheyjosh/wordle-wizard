import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Wordle Wizard' }: Props) => (
  <div className="flex flex-col h-screen text-gray-100 bg-gray-900">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="w-full max-w-xl mx-auto text-center border-b border-gray-700">
      <h1 className="my-2 text-4xl font-bold leading-9 uppercase">
        Wordle Wizard
      </h1>
    </header>
    <main className="w-full max-w-xl mx-auto">{children}</main>
  </div>
);

export default Layout;
