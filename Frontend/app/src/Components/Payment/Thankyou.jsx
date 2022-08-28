import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thankyou = () => {
    const navigate = useNavigate()
    const toHome = () => {
        navigate("../")
    }
  return (
    <>
        <Center>
            <Box display='flex' justifyContent='center' marginTop='200px'>
                <VStack>

                <Heading>Thankyou for shopping with us!</Heading>
                <b/>
                <b/>
                <b/>
                <Button colorScheme='teal' onClick={toHome}>Continue shopping</Button>
                </VStack>
            </Box>
        </Center>
    </>
  )
}

export default Thankyou