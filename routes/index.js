import express from 'express';
import AirQualityController from '../controllers/air.quality.controller.js'
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({ message: 'Air Quality API' });
});

router.get("/air-quality", AirQualityController.getAirQualityInformation);
router.get("/air-quality/most-polluted", AirQualityController.getTheMostPollutedDateTime);

export default router;