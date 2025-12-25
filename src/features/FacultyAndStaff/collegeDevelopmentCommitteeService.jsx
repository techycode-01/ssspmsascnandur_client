import axios from "axios";
import { base_client_url } from "../../utils/base_url";

/* GET ALL */
export const allCollegeDevelopmentCommittee = async () => {
  const response = await axios.get(
    `${base_client_url}/college-development-committee/all`
  );
  return response.data;
};

const collegeDevelopmentCommitteeService = {
  allCollegeDevelopmentCommittee,
};

export default collegeDevelopmentCommitteeService;
