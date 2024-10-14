const express = require('express');
const { addReminder, getReminders, getReminderById, updateReminder, deleteReminder } = require('../controlers/reminderController');

const router = express.Router();

router.post('/', addReminder);
router.get('/', getReminders);
router.get('/:id', getReminderById);
router.put('/:id', updateReminder);
router.delete('/:id', deleteReminder);

module.exports = router;
