import connectMongo from "../../../database/conn"
import { getUser, putUser, deleteUser } from "../../../database/controller"

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Database connection error." }))

    // - Check type of request
    const { method } = req

    switch (method) {
        case "GET":
            getUser(req, res)
            break;
        case "PUT":
            putUser(req, res)
            // res.status(200).json({ method, name: "PUT Request" })
            break
        case "DELETE":
            deleteUser(req, res)
            // res.status(200).json({ method, name: "DELETE Request" })
            break
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"])
            res.status(405).end(`Method ${method} not allowed.`)
            break
    }
}