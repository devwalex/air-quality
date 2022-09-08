import AirQualityService from "../services/air.quality.service.js";

class AirQualityController {
  async getAirQualityInformation(req, res) {
    try {
      const { longitude, latitude } = req.query;

      const result = await AirQualityService.getInformation(
        longitude,
        latitude
      );

      if (result.status === "success") {
        return res.status(200).send({
          result: {
            pollution: result.data.current.pollution,
          },
        });
      } else {
        return res.status(result.response.status).send(result.response.data);
      }
    } catch (error) {
      console.error("GetAirQualityInformation Error ==>", error);
      return res.status(500).send({
        status: "fail",
        message: "Error occurred. Please try again later.",
      });
    }
  }

  async getTheMostPollutedDateTime(req, res) {
    try {
      const result = await AirQualityService.getTheMostPollutedDateTime();

      return res.status(200).send({
        result,
      });
    } catch (error) {
      console.error("GetTheMostPollutedDateTime Error ==>", error);
      return res.status(500).send({
        status: "fail",
        message: "Error occurred. Please try again later.",
      });
    }
  }
}

export default new AirQualityController();
