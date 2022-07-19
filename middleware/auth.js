const jwt = require("jsonwebtoken");
const { validateToken } = require("./jwt");

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    console.log(authHeader);
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_JWT, (err, verifyToken) => {
      if (err) {
        return res.sendStatus(403);
      }
      req._id = verifyToken._id;
      console.log(req._id);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = { authJWT };

("bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlmMzBmODA1NjA1OWIwODZlMmM1NjQiLCJpYXQiOjE2NTY5NDUxNDAsImV4cCI6MTY1Njk0NTc0MH0.7lZKZG0Uha6og9tXh2XJGXZIqhiGPBkmL0SW1I6ynvw");
