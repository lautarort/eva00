import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Container
} from '@chakra-ui/react'


export default function UserForm() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const router = useRouter();

    console.log(router.query)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log('submitted')
        if (router.query.id) {
            console.log('update');
            const res = await axios.put('/api/users/' + router.query.id, user)
            console.log(res)
        } else {
            const res = await axios.post('/api/users', user)
            console.log(res)
        }
        router.push('/usersPage')
    }


    const handleChange = ({ target: { id, value } }) =>
        setUser({ ...user, [id]: value })

    useEffect(() => {

        const getUser = async () => {
            const { data } = await axios.get('/api/users/' + router.query.id)
            setUser(data)
            // console.log(data)
        }

        if (router.query?.id) {
            getUser(router.query.id)
            // console.log(router.query.id)
        }
    }, [])



    return (
        <Container
            maxW='2xl'
            // bg='red.200'
            centerContent
            paddingX={8}
            paddingY={8}
        >
            <Stack
                paddingX={8}
                paddingY={8}
                // bg='blue.600'
                maxW='md'

            >
                <form onSubmit={handleSubmit} >
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input type="text" id="name" value={user.name} onChange={handleChange} placeholder='Juan Doe' />
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="text" value={user.email} id="email" onChange={handleChange} placeholder='email@ejemplo.com' />
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Input type="text" id="company" value={user.company} onChange={handleChange} placeholder='387-6282048' />
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                    >
                        {router.query.id ? 'Update User' : 'Create User'}
                    </Button>
                </form>

            </Stack>
        </Container>
    )
}
