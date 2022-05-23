  
/**
 * @description it converts the success response into json object
 * @param {object} res response
 * @param {number} code status code
 * @param {string} token
 * @param {string} message
 * @param {string} data
 * @return {object} return json object of successfully http verb action
 */
const successResponse = (res, code, token, message, data = null) => res.status(code).json({
    token,
    message,
    data,
  });
  
  /**
   * @description it converts the success response into json object
   * @param {object} res response
   * @param {number} code status code
   * @param {string} error
   * @return {object} return json error object of http verb action
   */
  const errorResponse = (res, code, error) => res.status(code).json({
    error
  });
  
  export default {
    successResponse, errorResponse
  };
