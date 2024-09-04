import userModel from "../models/user.js"
import bcrypt from "bcrypt";

const Signup = async ({ data }) => {

    try {
        const findEmail = await userModel.findOne({ email: data.email })
        if (findEmail) {
            return "email already in use"
        } else {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            const newUser = new userModel({ ...data, password: hashedPassword });
            await newUser.save()
            return newUser;
        }
    } catch (error) {
        console.error(error);
        return "error in signup"
    }
}

const Login = async ({ data }) => {

    try {
        const user = await userModel.findOne({ email: data.email })
        if (!user) {
            return "no user found"
        }
        const matchPassword = await bcrypt.compare(data.password, user.password)
        if (!matchPassword) {
            console.log("");
            return { error: "incorrect Password" };
        }

        return user
    } catch (error) {
        console.error(error);
        return { error: "Error occurred during login" };
    }
}

const view = {
    Signup,
    Login
}

export default view;