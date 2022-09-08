import schedule from 'node-schedule'
import AirQualityService from "../services/air.quality.service.js";

class AirQualityJobs {
    async checkParisAirQualityEveryMinute(){
        console.log('Jobs Started....');
        schedule.scheduleJob('*/1 * * * *', async () => AirQualityService.saveInformation('2.352222','48.856613'));
    }
}

export default new AirQualityJobs