import userView from "../view/userView.js"
import { generateToken } from "../hooks/token.js"

const Signup = async (req, res) => {
    const { body } = req
    try {
        const response = await userView.Signup({ data: body })
        if (response.error) {
            return res.status(400).send(response.error)
        }

        res.send(response)
    } catch (error) {
        console.error(error);
    }
}

const Login = async (req, res) => {
    const { body } = req
    try {
        const response = await userView.Login({ data: body })
        if (response.error) {
            return res.status(400).send(response.error)
        }

        const token = await generateToken({ _id: response._id, email: response.email });
        res.send({
            message: "User created successfully",
            token: token,
            response
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal server error" });
    }
}

const AdminLogin = async (req, res) => {
    const { body } = req
    console.log("body", body);
    try {
        const response = await userView.AdminLogin({ data: body })
        console.log("res",response);
        if (response.error) {
            return res.status(400).send(response.error)
        }

        const token = await generateToken({ _id: response._id, email: response.email });
        res.send({
            message: "login successfully",
            token: token,
            response
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send(response.error)
    }
}

const updateBooks = async (req, res) => {
    const { body } = req
    try {
        const response = await userView.updateBooks({ data: body })
        if (response.error) {
            return res.status(400).send(response.error)
        }
        res.send(response)
    } catch (error) {
        console.error(error);
        return res.status(500).send(response.error)
    }
}

const controller = {
    Signup,
    Login,
    updateBooks,
    AdminLogin
}

export default controller;