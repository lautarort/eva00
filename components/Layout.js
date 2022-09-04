import { Stack, Text } from "@chakra-ui/react"

export default function Layout({ children }) {
    return (

        <>
            <Stack  >
                <Text
                    flex={1}
                    color="orange.500"
                    fontSize='4xl'
                    fontWeight='bold'
                    fontFamily='sans'
                    lineHeight='normal'
                    textAlign='center' >
                    XxxxxX
                </Text>
            </Stack>

            <div >
                <div >{children}</div>
            </div>
        </>
    )
}
