import "dotenv/config";
import axios from "axios";
const iqairApiKey = process.env.IQAIR_API_KEY;

class IqairHelper {
  /**
   * @method getNearestCityInformation - Get nearest city air quality information (GPS coordinates)
   * @param {string} longitude
   * @param {string} latitude
   * @return {Promise<Object>}
   */

  async getNearestCityInformation(longitude, latitude) {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${iqairApiKey}`,
        headers: {
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("GetNearestCityInformation >>", error);
      if (error.response) {
        return error;
      } else {
        throw new Error(error);
      }
    }
  }
}

export default new IqairHelper();
