const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/hms');
        console.log("Server is connected to the database successfully");
        return mongoose; 
      } catch (error) {
        console.error("Error connecting to database:", error);
        throw error; 
      }
}
module.exports = main