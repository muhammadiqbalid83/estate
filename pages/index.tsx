import Carousel from '@/components/landing/Carousel'
import Company from '@/components/landing/Company'
import Experience from '@/components/landing/Experience'
import Help from '@/components/landing/Help'
import PopularProperties from '@/components/landing/PopularProperties'
import Testimonials from '@/components/landing/Testimonials'

export default function Home() {
  return (
    <>
      <Carousel />
      <Company />
      <PopularProperties />
      <Experience />
      <Testimonials />
      <Help />
    </>
  )
}
