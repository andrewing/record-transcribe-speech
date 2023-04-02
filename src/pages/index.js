import Head from 'next/head'
import Hero from "@/components/Hero"
import { Container, Spacer } from '@nextui-org/react'
import About from '@/components/About'
import Divider from '@/components/Divider'
import Contact from '@/components/Contact'
import { useEffect, useRef, useState } from 'react'
import CustomNav from '@/components/CustomNav'
import { Router } from 'next/router'

const Home = ({ isLargeScreen }) => {

  const [navActive, setNavActive] = useState("");

  const refs = {
    recordRef: useRef(),
    aboutRef: useRef(),
    contactRef: useRef(),
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavActive(entry.target.id)
        }
      });
    }, {
      threshold: 0.7
    });


    refs.recordRef.current && observer.observe(refs.recordRef.current);
    refs.aboutRef.current && observer.observe(refs.aboutRef.current);
    refs.contactRef.current && observer.observe(refs.contactRef.current);

  }, []);

  return (
    <main>
      <CustomNav active={navActive} />
      <Hero recordRef={refs.recordRef} isLargeScreen={isLargeScreen}/>
      <Divider text={"about"} />
      <About aboutRef={refs.aboutRef} />
      <Divider text={"contact"} />
      <Contact contactRef={refs.contactRef} />

    </main>
  )
}

export default Home;