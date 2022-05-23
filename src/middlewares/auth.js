// import UserServices from "../services/user.service";
// import FarmerService from "../services/farmer.service";
// import errorMessage from "../utils/errorMessage";
// import responses from "../utils/responses";
// import statusCode from "../utils/statusCode";

// const { getUserByIdOrEmail,checkUsername } = UserServices;

// const { checkNID } = FarmerService;
// const { errorResponse } = responses;
// const { conflict } = statusCode;
// const { duplicateEmail,duplicateUsername,duplicateNID } = errorMessage;

// const checkEmailExist = async (req, res, next) => {
//   const user = await getUserByIdOrEmail(req.body.email);
//   if (user) {
//     return errorResponse(res, conflict, duplicateEmail);
//   }
//   return next();
// };

// const checkUsernameExist = async (req, res, next) => {
//   const user = await checkUsername(req.body.username);
//   if (user) {
//     return errorResponse(res, conflict, duplicateUsername);
//   }
//   return next();
// };
// const checkNidExist = async (req, res, next) => {
//   const user = await checkNID(req.body.nid);
//   if (user) {
//     return errorResponse(res, conflict,duplicateNID);
//   }
//   return next();
// };


// export { checkEmailExist,checkUsernameExist,checkNidExist };