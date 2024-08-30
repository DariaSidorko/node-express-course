

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { UnauthenticatedError } = require('../errors')

dotenv.config();

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token provided')
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: decoded.name };
    next();
  } catch (err) {
    throw new UnauthenticatedError('Not authorized to access this route')
  }
};

module.exports = authenticationMiddleware