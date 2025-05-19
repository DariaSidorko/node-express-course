
const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ msg: 'Please provide a username' });
  }

  // In a real app, you'd verify credentials here
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ msg: 'Logon successful', token });
};

const hello = (req, res) => {
  res.status(200).json({ msg: `Hello, ${req.user.username}` });
};

module.exports = { logon, hello };
