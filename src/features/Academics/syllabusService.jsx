import axios from "axios";
import { base_client_url } from "../../utils/base_url";

/* ================= GET ALL SYLLABUS ================= */
export const allSyllabus = async () => {
  const response = await axios.get(`${base_client_url}/syllabus/all`);
  return response.data;
};

const syllabusService = {
  allSyllabus,
};

export default syllabusService;
