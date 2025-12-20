import {configureStore} from "@reduxjs/toolkit";
import grantReadReducer from "../features/grantsRead/grantsReadSlice";
import newsReducer from "../features/news/newsSlice";
import authReducer from "../features/auth/authSlice";
import uploadReducer from "../features/upload/uploadSlice";
import contactFormReducer from "../features/contactusform/contactFormSlice";
import addressReducer from "../features/addressed/addressSlice";
import phoneReducer from "../features/phone/phoneSlice";
import emailReducer from "../features/emails/emailSlice";
import programmeReducer from "../features/programme/programmeSlice";
import ourTeamReducer from "../features/ourTeam/ourTeamSlice";
import galleryReducer from "../features/gallery/gallerySlice";
import socMediaReducer from "../features/socialMedia/socialSlice";
import testimonialReducer from "../features/testimonial/testimonialSlice";
import mapLinkReducer from "../features/map/mapSlice";
import blogReducer from "../features/blog/blogSlice";
import certificateReducer from "../features/certificate/certificateSlice";
import upcomingReducer from "../features/upcomingEvent/upcomingEventSlice";
import youtubeReducer from "../features/youtube/youtubeSlice";

export const store = configureStore({
    reducer :{
        news: newsReducer,
        grantRead: grantReadReducer, 
        auth: authReducer,
        upload: uploadReducer,
        contactForm: contactFormReducer,
        address: addressReducer,
        phone: phoneReducer,
        email: emailReducer,
        programme: programmeReducer,
        ourTeam: ourTeamReducer,
        gallery: galleryReducer,
        socMedia: socMediaReducer,
        testimonial: testimonialReducer,
        mapLink: mapLinkReducer,
        blog: blogReducer,
        certificate: certificateReducer,
        upcoming: upcomingReducer,
        youtube: youtubeReducer
    }
});
