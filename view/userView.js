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
            return { error: "user not found" };
        }
        const matchPassword = await bcrypt.compare(data.password, user.password)
        if (!matchPassword) {
            return { error: "incorrect Password" };
        }

        return user
    } catch (error) {
        console.error(error);
        return { error: "Error occurred during login" };
    }
}

const AdminLogin = async ({ data }) => {
    const password = "pakistan312"
    const email = "hasnatking1947@gmail.com"

    try {
        if (data.password === password && data.email === email) {
            return { _id: "admin123", email: data.email };
        } else {
            return { error: "incorrect Password or email" };

        }

    } catch (error) {
        console.error(error);
        return { error: "Error occurred during login" };
    }
}


const updateBooks = async ({ data }) => {

    try {
        const booksAdd = await userModel.find(data)
        if (!booksAdd) {
            return { error: "booksAdd not found or update failed." };
        }

        return booksAdd
    } catch (error) {
        console.error(error);
        return { error: "Error occurred during booksAdd" };
    }
}

const view = {
    Signup,
    Login,
    updateBooks,
    AdminLogin
}

export default view;