import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Wordle Wizard' }: Props) => (
  <div className="flex flex-col min-h-screen text-gray-100 bg-gray-900 h-ful">
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
    <main className="w-full h-full max-w-xl min-h-[75vh] mx-auto">{children}</main>
    <footer className="w-full max-w-xl mx-auto text-center border-t border-gray-700">
      <p className="w-full max-w-md mx-auto my-4">
        This helper tool was made by{' '}
        <a
          href="https://www.heyjo.sh/"
          target="_blank"
          className="font-bold underline"
        >
          Josh Barnett
        </a>{' '}
        and has no relationship with the{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          className="font-bold underline"
        >
          Wordle application
        </a>{' '}
        or its author.
      </p>
    </footer>
  </div>
);

export default Layout;
