import jwt from 'jsonwebtoken';
const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    console.log(decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
};
const authorizeFarmer = (req, res, next) => {
  if (req.user.role !== 'Farmer') {
    res.status(403).json({ success: false, message: 'Access denied' });
  } else {
    next();
  }
};

export  { authenticateUser, authorizeFarmer };
