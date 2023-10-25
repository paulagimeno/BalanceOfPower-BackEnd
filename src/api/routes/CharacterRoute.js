const express = require('express');
const {getCharacters, addCharacter, updateCharacter} = require('../controllers/CharacterControllers');
const upload = require('../../middleware/upload.files');
const router = express.Router();


router.post('/addCharacter', upload.single('avatarImage'), addCharacter);
router.get('/characters', getCharacters);
router.put('/updateCharacter/:id', upload.single('fullBodyImage'), updateCharacter)

module.exports = router