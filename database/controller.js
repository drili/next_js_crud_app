// - Controller
import Users from '../model/user'

// - GET
export async function getUsers(req, res) {
    try {
        const users = await Users.find({})
        if(!users) return res.status(404).json({ error: "::: Data not found. "})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "::: [GET] Error while fetching data." })
    }
}

// - POST
export async function postUser(req, res) {
    try {
        const formData = req.body
        if(!formData) return res.status(404).json({ error: "::: formData not found."})
        Users.create( formData, function(err, data){
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error: "::: [POST] Error while fetching data." })
    }
}

// - PUT
export async function putUser(req, res) {
    try {
        const { userId } = req.query
        const formData = req.body

        if (userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData)
            res.status(200).json(user)
        }

        res.status(404).json({ error: "::: User not selected"})
    } catch (error) {
        return res.status(404).json({ error: "::: [PUT] Error while updating data." })
    }
}

// - DELETE
export async function deleteUser(req, res) {
    try {
        const { userId } = req.query

        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json({ deleted: userId })
        }

        res.status(404).json({ error: "::: User not selected."})
    } catch (error) {
        return res.status(404).json({ error: "::: [DELETE] Error while deleting data." })
    }
}