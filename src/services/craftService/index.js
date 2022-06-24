import client from "../../graphql";
import { GET_ALL_MEETING_INFO } from "./queries";
import allData from '../../sample/allData.json';
class CraftService {
  async getAllMeetingInfo() {
    try {
      let response = await client.query({
        query: GET_ALL_MEETING_INFO,
      });
      if(!response || !response.data){
        throw new Error('Can not get Meeting Info.')
      }
      response= allData;//JSON.parse(allData); 
      console.log(' c response', response);
      return response.data;
    } catch (err) {
        throw err;
    }
  }
}

export default new CraftService();