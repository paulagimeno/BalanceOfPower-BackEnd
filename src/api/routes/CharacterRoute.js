const express = require('express');
const {getCharacters, addCharacter} = require('../controllers/CharacterControllers');

const router = express.Router();
const upload = require('../../middleware/upload.files');

router.post('/addCharacter', upload.single('image'), addCharacter);
router.get('/characters', getCharacters);


module.exports = router