import Head from 'next/head'
import Hero from "@/components/Hero"
import { Container } from '@nextui-org/react'
import About from '@/components/About'
import Divider from '@/components/Divider'

const Home = ({refs}) => {
  return (
    <main>
      <Hero recordRef={refs.recordRef} />
      <Divider text={"about"} />
      <About aboutRef={refs.aboutRef} />
    </main>
  )
}

export default Home;