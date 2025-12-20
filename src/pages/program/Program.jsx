
import React, { useEffect } from 'react'
import ProgBan from '../../components/otherBanners/ProgBan';
import EventPage from '../../components/eventPage/EventPage';


const Program = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <>
      <ProgBan />
      <EventPage />
    </>
  )
}

export default Program