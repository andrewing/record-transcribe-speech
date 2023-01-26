import '@/styles/globals.css'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Head from 'next/head';
import CustomNav from '@/components/CustomNav';
import { useEffect, useRef, useState } from 'react';

export default function App({ Component, pageProps }) {

  const [navActive, setNavActive] = useState("");

  const darkTheme = createTheme({
    type: 'dark',
  })

  const refs = {
    recordRef: useRef(),
    aboutRef: useRef(),
    contactRef: useRef(),
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id)
          setNavActive(entry.target.id)
        }
      });
    }, { 
      threshold: 0.75
    });
    observer.observe(refs.recordRef.current);
    observer.observe(refs.aboutRef.current);
    // observer.observe(refs.contactRef.current);
  }, []);


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
          <CustomNav active={navActive} />
          <Component
            refs={refs}
            {...pageProps}
          />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  )
}
