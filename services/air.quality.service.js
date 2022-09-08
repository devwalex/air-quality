import db from "../config/db.js";
import IqairHelper from "../helpers/iqair.helper.js";

class AirQualityService {
  /**
   * @method getInformation - returns air quality information of the longitude and latitude passed
   * @param {string} longitude
   * @param {string} latitude
   * @returns {Promise<Object>}
   */

  async getInformation(longitude, latitude) {
    return await IqairHelper.getNearestCityInformation(longitude, latitude);
  }

  /**
   * @method saveInformation - saves air quality information of the longitude and latitude passed
   * @param {string} longitude
   * @param {string} latitude
   */

  async saveInformation(longitude, latitude) {
    const response = await IqairHelper.getNearestCityInformation(
      longitude,
      latitude
    );
    await db("pollutions").insert(response.data.current.pollution);
  }

  /**
   * @method getTheMostPollutedDateTime - returns the datetime of the most polluted air quality in paris
   * @returns {Promise<Object>}
   */

  async getTheMostPollutedDateTime() {
    const getMaxAqius = await db("pollutions").max("aqius as max_aqius");

    const mostPolluted = await db
      .select("created_at as datetime")
      .from("pollutions")
      .where("aqius", getMaxAqius[0].max_aqius)
      .orderBy("created_at", "desc")
      .first();
    return mostPolluted;
  }
}

export default new AirQualityService();
