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