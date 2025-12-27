import axios from "axios";
import { base_client_url } from "../../utils/base_url";

/* ================= GET ALL ================= */
export const allAcademicTimeTable = async () => {
  const response = await axios.get(
    `${base_client_url}/academic-time-table/all`
  );
  return response.data;
};

const academicTimeTableService = {
  allAcademicTimeTable,
};

export default academicTimeTableService;
