import '@/styles/globals.css'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Head from 'next/head';
import { useState } from 'react';

export default function App({ Component, pageProps }) {

  const darkTheme = createTheme({
    type: 'dark',
  })

  return (
    <>
      <Head>
        <title>Record</title>
        <meta name="description" content="Transcriber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemesProvider
        enableSystem={false}
        defaultTheme="dark"
        attribute="class"
        value={{
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Component
            {...pageProps}
          />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  )
}
