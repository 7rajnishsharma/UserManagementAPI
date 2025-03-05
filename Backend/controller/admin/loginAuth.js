const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const loginAuth = async (req, res) => {
  const { email, password } = req.body;

  console.log("ENV Admin Email:", process.env.ADMIN_MAIL);
  console.log("ENV Admin Password:", process.env.ADMIN_PASSWORD);

  const admin = {
    email: process.env.ADMIN_MAIL,
    password: process.env.ADMIN_PASSWORD,
  };

  if (email === admin.email) {
    if (password === admin.password) {
      const token = createToken(admin.email);
      res.json({
        adminToken: token,
      });
    } else {
      res.status(400).send({
        message: "Wrong Password",
      });
    }
  } else {
    res.status(400).send({
      message: "Admin not found",
    });
  }
};

module.exports = loginAuth;
