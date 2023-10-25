const mongoose = require('mongoose');


const connectDb = async () => {
try {
const database = await mongoose.connect(process.env.DB_URL, {
useNewUrlParser : true,
useUnifiedTopology : true
})
const {name, host} = database.connection;
console.log(`Nombre de la BD ${name} host : ${host}`)
} catch (error) {
console.log(error)
}
}

module.exports={connectDb}