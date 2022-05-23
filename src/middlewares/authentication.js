import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.sendStatus(403);
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (!user) {
      return res.sendStatus(401);
    }

    req.user = user;
  });

  // eslint-disable-next-line no-sequences
  return next();
};

export default verifyToken;
