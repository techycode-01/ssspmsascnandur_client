import { configureStore } from "@reduxjs/toolkit";
import grantReadReducer from "../features/grantsRead/grantsReadSlice";
import newsReducer from "../features/news/newsSlice";
import authReducer from "../features/auth/authSlice";
import uploadReducer from "../features/upload/uploadSlice";
import contactFormReducer from "../features/contactusform/contactFormSlice";
import addressReducer from "../features/addressed/addressSlice";
import phoneReducer from "../features/phone/phoneSlice";
import emailReducer from "../features/emails/emailSlice";
import programmeReducer from "../features/programme/programmeSlice";

import managementCommitteeReducer from "../features/FacultyAndStaff/managementCommitteeSlice";
import collegeDevelopmentCommitteeReducer from "../features/FacultyAndStaff/collegeDevelopmentCommitteeSlice";
import teachingStaffReducer from "../features/FacultyAndStaff/teachingStaffSlice";

//Academics
import syllabusReducer from "../features/Academics/syllabusSlice";
import academicCalendarReducer from "../features/Academics/academicCalendarSlice";
import academicTimeTableReducer from "../features/Academics/academicTimeTableSlice";

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
  reducer: {
    news: newsReducer,
    grantRead: grantReadReducer,
    auth: authReducer,
    upload: uploadReducer,
    contactForm: contactFormReducer,
    address: addressReducer,
    phone: phoneReducer,
    email: emailReducer,
    programme: programmeReducer,

    managementCommittee: managementCommitteeReducer,
    collegeDevelopmentCommittee: collegeDevelopmentCommitteeReducer,
    teachingStaff: teachingStaffReducer,

    syllabus: syllabusReducer,
    academicCalendar: academicCalendarReducer,
    academicTimeTable: academicTimeTableReducer,
    ourTeam: ourTeamReducer,
    gallery: galleryReducer,
    socMedia: socMediaReducer,
    testimonial: testimonialReducer,
    mapLink: mapLinkReducer,
    blog: blogReducer,
    certificate: certificateReducer,
    upcoming: upcomingReducer,
    youtube: youtubeReducer,
  },
});
