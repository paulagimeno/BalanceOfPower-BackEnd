const express = require('express');
const { getCharacters, addCharacter, updateCharacter, deleteCharacter } = require('../controllers/CharacterControllers');
const upload = require('../../middleware/upload.files');
const router = express.Router();


router.post('/addCharacter', upload.single('avatarImage'), addCharacter);
router.get('/characters', getCharacters);
router.put('/updateCharacter/:id', upload.single('fullBodyImage'), updateCharacter)
router.delete('/:id', deleteCharacter);

module.exports = router