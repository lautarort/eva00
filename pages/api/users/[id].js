import { pool } from '../../../config/db'

export default async function handler(req, res) {
    // console.log(req.query)

    switch (req.method) {
        case 'GET':
            return await getUser(req, res)
        case 'DELETE':
            return await deleteUser(req, res)
        case 'PUT':
            return await updateUser(req, res)
        default:
            break;
    }


}

const getUser = async (req, res) => {
    const { id } = req.query

    const [result] = await pool.query('SELECT * FROM user WHERE id= ?', [id])

    // console.log(result)

    return res.status(200).json(result[0])
}

const deleteUser = async (req, res) => {
    const { id } = req.query

    const result = await pool.query('DELETE FROM user WHERE id= ?', [id])

    // console.log(result)

    return res.status(204).json()
}

const updateUser = async (req, res) => {
    const { id } = req.query
    const { name, email, phone } = req.body
    try {
        await pool.query('UPDATE client SET name = ?, email = ?, phone = ?  WHERE id= ?', [name, email, phone, id])

        return res.status(204).json()
    } catch (error) {
        console.log(error.message)
    }
}