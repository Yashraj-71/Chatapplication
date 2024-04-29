const express = require('express');
const multer = require('multer');
const router = express.Router();
const contactsController = require('../controllers/contacts.js');

const upload = multer(); 

router.post('/contact', upload.none(), contactsController.submitForm);

module.exports = router;

