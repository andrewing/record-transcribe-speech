import '@/styles/globals.css'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {

  const darkTheme = createTheme({
    type: 'dark',
  })

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 700);
    };
    handleResize(); // initialize the state variable with the current window size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Record</title>
        <meta name="description" content="Transcriber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Record"
        />
        <meta property="og:image" content={"/playbutton.png"} />
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
            isLargeScreen={isLargeScreen}
          />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  )
}
