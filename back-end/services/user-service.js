import { UserModel } from "../models/user-model.js";
import { compareHash, encryptPassword } from "../utils/services/password-hash.js";
import { generateToken } from "../utils/services/token.js";
export const register = async (userObject) => {
  try {
    userObject.password = encryptPassword(userObject.password);
    const doc = await UserModel.create(userObject);
    if (doc && doc._id) {
      return "User registered successfully";
    }
  } catch (error) {
    throw error;
  }
};
export const login = async (userObject) => {
  try {
    const doc = await UserModel.findOne({ email:userObject.email }).exec();
    if (doc && doc.email) {
      if ( compareHash(userObject.password, doc.password)) {
        const token = generateToken(doc.email);
        console.log("Token", token);
        return {message:"Welcome"+doc.name,role:doc.role,token:token};

      } else {
        throw new Error("Invalid password");
      }
    }
    else{
      return { error: true, message: "Invalid email or password" };
    }
  } catch (error) {
    throw new Error("INvalid user Credentials");
  }
};
