import bcrypt from "bcrypt";

const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 15);
  return hash;
};
const decryptPassword = async (dataTodecrypt, dataBaseHash) => {
  const deHashedPassword = await bcrypt.compare(dataTodecrypt, dataBaseHash);
  return deHashedPassword;
};

const oauthCallback = (refreshToken, accessToken, profile, cb) => {
  if (profile) {
    const { displayName, emails, provider } = profile;
    let names=displayName.split(" ")
    const randomNumber = Math.floor(Math.random() * 16) + 23
    const number = Math.floor(Math.random() * 20) + 17
    let userName=names[0].concat("_").concat(randomNumber).concat(number);
    const profileData = {
      username:userName,
      firstname:names[0],
      lastname:names[1],
      email: emails[0].value,
      provider,
    };
    
    return cb(null, profileData);
  }
};

export default {
  hashPassword,
  decryptPassword,
  oauthCallback,
};
