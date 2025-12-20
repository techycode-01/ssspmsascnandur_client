import React, { useEffect } from 'react'
import CauseBan from '../../components/otherBanners/CauseBan';
import FeaturedCauses from '../../components/featuredCauses/FeaturedCauses';

const Causes = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <CauseBan />
        <FeaturedCauses />
    </>
  )
}

export default Causes