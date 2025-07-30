import jwt from 'jsonwebtoken';
export const generateToken = (email)=>{
jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' })
};
export const verifyToken = (token)=>{
    const decode = jwt.verify(token,'process.env.JWT_SECRET');
    return decode.email;

};