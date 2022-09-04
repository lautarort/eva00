import React from 'react'
import Link from 'next/link';
import axios from 'axios'
import Layout from '../components/Layout'


export default function usersPage({ users }) {
    console.log(users)
    return (
        <Layout >
            {users.map(user => (
                <Link href={`/users/${user.id}`} key={user.id}>
                    <a>
                        <div >
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                            <h2>{user.phone}</h2>
                        </div>
                    </a>
                </Link>
            ))}
        </Layout>
    )
}

export const getServerSideProps = async (context) => {

    const { data: users } = await axios.get('http://https://eva00-b6vwkfodn-lautarort.vercel.app/api/users')
    // console.log(res.data)

    return {
        props: {
            users
        }
    }
}

