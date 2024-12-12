export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // Hardcoded expiration value (7 days)
  const cookieExpireDays = 7; // Replace with your desired value

  const options = {
    expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
    httpOnly: true, // Ensures the cookie is not accessible via JavaScript
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
