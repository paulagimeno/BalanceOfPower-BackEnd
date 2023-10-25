const Characters = require('../models/CharacterModel');

//POST
const addCharacter = async (req, res) => {
    try  {
        const body = req.body;
        const character = new Characters(body);
        if (req.file.path) {
            character.avatarImage = req.file.path;
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

//PUT
const updateCharacter = async (req, res) => {
    try{
        const {id} = req.params;
        const characterBody = {...req.body};
        characterBody._id = id;

        if(req.file && req.file.path){
            characterBody.fullBodyImage = req.file.path;
        }

        const updateCharacter = await Characters.findByIdAndUpdate(id, characterBody, {new: true});

        if(!updateCharacter){
            return res.status(404).json({message: "character does not exist"})
        }
        return res.status(200).json(updateCharacter)
    } catch (error){
        console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = { getCharacters, addCharacter, updateCharacter };


