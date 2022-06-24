import client from "../../graphql";
import { GET_ALL_MEETING_INFO } from "./queries";

class CraftService {
  async getAllMeetingInfo() {
    try {
      let response = await client.query({
        query: GET_ALL_MEETING_INFO,
      });
      if(!response || !response.data){
        throw new Error('Can not get Meeting Info.')
      }
      return response.data;
    } catch (err) {
        throw err;
    }
  }
}

export default new CraftService();