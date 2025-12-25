import axios from "axios";
import { base_client_url } from "../../utils/base_url";

/* GET ALL */
export const allManagementCommittee = async () => {
  const response = await axios.get(
    `${base_client_url}/management-committee/all`
  );
  return response.data;
};

const managementCommitteeService = {
  allManagementCommittee,
};

export default managementCommitteeService;
