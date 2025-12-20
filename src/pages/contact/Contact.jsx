import React, { useEffect } from 'react';
import ContactBan from '../../components/otherBanners/ContactBan';
import ContactDetails from '../../components/contactDet/ContactDetails';
import ContactForm from '../../components/contactForm/ContactForm';
import { getMapThunk } from '../../features/map/mapSlice';
import { useDispatch, useSelector } from 'react-redux';


const Contact = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch(getMapThunk());
  }, [dispatch]);

  const mapState = useSelector((state) => state?.mapLink?.mapLink || []);
  
  return (
    <>
        <ContactBan />
        <ContactDetails />
        <ContactForm/>
        {
          mapState?.map((mp, i) => {
            return (
              <>
                <iframe key={i} src={mp?.link} width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </>
            )
          })
        }
    </>
  )
}

export default Contact