import { pool } from '../../../config/db'

export default async function handler(req, res) {
    // console.log(req.method);

    switch (req.method) {
        case 'GET':
            return await getUser(req, res)
        case 'POST':
            return await saveUser(req, res)
        // console.log('creating a lead')
        // console.log(req.body)

    }
}

const getUser = async (req, res) => {

    const [result] = await pool.query('SELECT * FROM user')
    console.log(result)
    return res.status(200).json(result)
}

const saveUser = async (req, res) => {
    const { name, email, phone } = req.body

    const [result] = await pool.query('INSERT INTO user SET ?', {
        name,
        email,
        phone
    })

    console.log(result)
    return res
        .status(200)
        .json({ name, email, phone, id: result.insertId })
}

