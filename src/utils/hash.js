const bcrypt=require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

// decode password

const decryptPassword = async (dataTodecrypt, dataBaseHash) => {
  const deHashedPassword = await bcrypt.compare(dataTodecrypt, dataBaseHash);
  return deHashedPassword;
};
module.exports = { hashPassword, decryptPassword };