const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const genarateToken = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secretKey, {
    expiresIn: "24h",
  });

  //   send it directly to cookie

  res.status(200).send({ token });
};

module.exports = { genarateToken };
