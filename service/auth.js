const jwt=require('jsonwebtoken');
require('dotenv').config();
const secret=process.env.secret_key;
console.log(secret);
function setUser(user) {
  return jwt.sign({
    _id:user._id,
    email:user.email,
    role:user.role,
  },secret,
  { expiresIn: '1h' });
}
function getUser(token) {
  // if(!token) return null;
  try{
    return jwt.verify(token,secret);
  }
  catch{
    return null;
  }
  
}
module.exports = {
  setUser,
  getUser,
};