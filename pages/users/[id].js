import React from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'

function UserView({ user }) {

    // console.log(user)

    const router = useRouter()

    const handleDelete = async (id) => {
        // console.log(id);
        const res = await axios.delete(`/api/users/${id}`)
        // console.log(res)
        router.push('/')
    }

    return (
        <Layout>

            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>

            <button
                onClick={() => handleDelete(user.id)}>
                delete
            </button>

            <button
                onClick={() => router.push("/users/edit/" + user.id)}>
                edit
            </button>

        </Layout>
    )
}

export const getServerSideProps = async (context) => {

    const { data: user } = await axios.get('http://localhost:3000/api/users/' + context.query.id)

    // console.log(res.data)

    return {
        props: {
            user
        }
    }
}

export default UserView