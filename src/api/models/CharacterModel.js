const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema ({
    name: {type: String, required: true},
    category: {type: String, enum: ['DPS', 'Tank', 'Healer'], required: true},
    avatarImage: {type: String, default: ""},
    fullBodyImage: {type: String, default: ""},
    combatType: {type: String, enum: ['Melee', 'Range'], required: true},
    mainWeapon: {type: String, required: true},
    subWeapon: {type: String, required: true},
    ability1: {type: String, required: true},
    ability2: {type: String, enum: ['Execute', 'Heal', 'Block'], required: true},
    crit: {type: Number, required: true},
    speed: {type: Number, required: true},
    strenght: {type: [Number], required: true},
    defense: {type: Number, required: true},
    hp: {type: Number, required: true},
}, {
    collection: 'characters'
});

const Character = mongoose.model('character', characterSchema);
module.exports = Character;