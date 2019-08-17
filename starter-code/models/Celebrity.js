const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchphrase: String,
    creator: { type: Schema.Types.ObjectId, ref: 'User' } //Creates document relationship between celebrity and user
})

const Celebrity = mongoose.model("Celebrity",celebSchema);
module.exports = Celebrity;