

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const login = async (req, res) =>  {
  const { name, password } = req.body;

  const token = jwt.sign({ name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  res.status(200).json({ token });
};

const dashboard = async (req, res) =>  {
  const userName = req.user.name;
  res.status(200).json({ message: `Hello, ${userName}!` });
};

module.exports = {
    login,
    dashboard,
  }
  