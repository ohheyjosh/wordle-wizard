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
    <header className="flex items-center justify-between w-full max-w-xl mx-auto text-center border-b border-gray-600">
      <a href="https://github.com/ohheyjosh/wordle-wizard" target="_blank">
        <svg
          className="w-9 h-9"
          fill="rgb(75 85 99)"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <h1 className="my-2 text-4xl font-bold leading-9 uppercase">
        Wordle Wizard
      </h1>
      <div className="w-9"></div>
    </header>
    <main className="w-full h-full max-w-xl min-h-[75vh] mx-auto">
      {children}
    </main>
    <footer className="w-full max-w-xl mx-auto text-center border-t border-gray-600">
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
