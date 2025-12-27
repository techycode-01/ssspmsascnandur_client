import axios from "axios";
import { base_client_url } from "../../utils/base_url";

/* ================= GET ALL ================= */
export const allAcademicCalendar = async () => {
  const response = await axios.get(`${base_client_url}/academic-calendar/all`);
  return response.data;
};

const academicCalendarService = {
  allAcademicCalendar,
};

export default academicCalendarService;
