const express = require('express');
const { getMedications, addMedication } = require('../controllers/medicationController');
const router = express.Router();

router.get('/', getMedications);
router.post('/', addMedication);

module.exports = router;
