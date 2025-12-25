import axios from "axios";
import { base_client_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

/* ===================== CREATE ===================== */
export const addTeachingStaff = async (staffData) => {
  const response = await axios.post(
    `${base_client_url}/teaching-staff/`,
    staffData,
    config
  );
  return response.data;
};

/* ===================== GET ALL ===================== */
export const allTeachingStaff = async () => {
  const response = await axios.get(`${base_client_url}/teaching-staff/all`);
  return response.data;
};

/* ===================== GET SINGLE ===================== */
export const singleTeachingStaff = async (id) => {
  const response = await axios.get(
    `${base_client_url}/teaching-staff/single/${id}`
  );
  return response.data;
};

/* ===================== UPDATE ===================== */
export const putTeachingStaff = async (staff) => {
  const response = await axios.put(
    `${base_client_url}/teaching-staff/update/${staff.id}`,
    staff.staffData,
    config
  );
  return response.data;
};

/* ===================== DELETE ===================== */
export const deleteTeachingStaff = async (id) => {
  const response = await axios.delete(
    `${base_client_url}/teaching-staff/delete/${id}`,
    config
  );
  return response.data;
};

const teachingStaffService = {
  addTeachingStaff,
  allTeachingStaff,
  singleTeachingStaff,
  putTeachingStaff,
  deleteTeachingStaff,
};

export default teachingStaffService;
