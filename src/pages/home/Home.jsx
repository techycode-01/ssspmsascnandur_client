import React, { useEffect } from 'react'
import HeroSection from '../../components/hero/HeroSection'
import FeatureSection from '../../components/feature/FeatureSection'
import HomeAbout from '../../components/homeAbout/HomeAbout'
import WeDo from '../../components/weDo/WeDo'
// import StatsSection from '../../components/statsSection/StatsSection'
import FeaturedCauses from '../../components/featuredCauses/FeaturedCauses'
import DonationHero from '../../components/donationHero/DonationHero'
import UpcomingEvents from '../../components/upcomingEvent/UpcomingEvents'
import TestimonialsSlider from '../../components/testimonial/TestimonialsSlider'
import GallerySlider from '../../components/homeGal/GallerySlider'
import BlogSection from '../../components/homeBlog/BlogSection'
import EventPage from '../../components/eventPage/EventPage'


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <HeroSection />
        <section
          // className="bg-no-repeat bg-center bg-cover"
          // style={{
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center center",
          // }}
        >
          <FeatureSection />
          <HomeAbout />
        </section>
        <EventPage />
        <WeDo />
        {/* <StatsSection /> */}
        <DonationHero />
        <UpcomingEvents />
        <TestimonialsSlider />
        <GallerySlider />
        <BlogSection />
        {/* <FeaturedCauses /> */}

    </>
  )
}

export default Home