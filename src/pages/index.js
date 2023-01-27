import Head from 'next/head'
import Hero from "@/components/Hero"
import { Container, Spacer } from '@nextui-org/react'
import About from '@/components/About'
import Divider from '@/components/Divider'
import Contact from '@/components/Contact'

const Home = ({refs}) => {
  return (
    <main>
      <Hero recordRef={refs.recordRef} />
      <Divider text={"about"} />
      <About aboutRef={refs.aboutRef} />
      <Divider text={"contact"} />
      <Contact contactRef={refs.contactRef} />
      
    </main>
  )
}

export default Home;