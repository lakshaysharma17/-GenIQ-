import jwt from 'jsonwebtoken';
export const generateToken = (data)=>{
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
};
export const verifyToken = (token)=>{
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    return decode;
};