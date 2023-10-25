const Characters = require('../models/CharacterModel');

//POST
const addCharacter = async (req, res) => {
    try  {
        const body = req.body;
        const character = new Characters(body);
        if (req.file.path) {
            character.image = req.file.path;
        }
        const createdCharacter = await character.save();
        return res.status(201).json(createdCharacter);
    } catch (error) {
        return res.status(500).json(error);   
    }
};

//GET
const getCharacters = async (req, res) => {
    try {
        const allCharacters = await Characters.find();
        return res.status(200).json(allCharacters);
    } catch (error) {
        return res.json(error)
}
}

module.exports = { getCharacters, addCharacter };


