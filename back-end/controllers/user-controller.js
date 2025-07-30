import {register as registerUser} from '../services/user-service.js';
import {login as loginUser} from '../services/user-service.js';
export const login = async (req, res)=>{
    console.log(req.body);
    const userObject = req.body;
    try {
        const obj =await loginUser(userObject);
        res.status(200).json(obj);
    } catch (error) {
        res.status(500).json({message: 'Error during register'});
        console.log(error);
    }
}
export const register = async (req, res)=>{
    console.log('Data rec ', req.body);
    const userObject = req.body;
    try {
        const message = await registerUser(userObject);
        res.status(200).json({message: message});
    } catch (error) {
        res.status(500).json({message: 'Error during register'});
        console.log(error);
    }
}
export const profile = (req, res)=>{
    res.json({message:'Profile '});
}