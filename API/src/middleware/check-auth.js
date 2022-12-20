
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
     console.log(req);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1rYyIsInVzZXJJZCI6IjYyYTAzZWM4NzljYzRjY2Q2NjJiZTc4ZSIsInVzZXJSb2xlIjoyLCJpYXQiOjE2NTQ2NjkwMTMsImV4cCI6MTY1NDY3MjYxM30.J9zHq7X8O_8ivLyGcRN2oJ4kv5b6pEHDVDFJoRXj7go";
     const token = req.header.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    
    req.userData = { username: decodedToken.username, userId: decodedToken.userId,userRole:decodedToken.userRole };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed! ok" });
  }
};