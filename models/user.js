const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  googleId:{type:String,required:false},
  feedback: [
    {
        message: { type: String, required: true },
        date: { type: Date, default: Date.now },
    },
],
  
},{timestamps:true});


const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
