const Users = require("../../model/users");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const existingUser = await Users.findOne({ email: email });
  if (existingUser) {
    res.status(400).send({
      message: "User Already existing.",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
      role,
    });
    newUser.save();
    console.log("Added New User");
    res.json({
      message: "Added User Successfully..!",
      userData: newUser,
    });
  }
};

module.exports = addUser;
