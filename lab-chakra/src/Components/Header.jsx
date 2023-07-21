import React from "react"
import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import bgImage from '../resources/images/banner-web.jpg'

const Header = () => {
    return (
        <Box
        h='48vh'
        bg='gray'
        bgImage={`url(${bgImage})`}
        bgRepeat='no-repeat'
        bgSize='cover'
        >
            <Flex
            direction='column'
            alignItems='center'
            justify='center'
            h='100%'
            bg='rgb(0 0 0 / 50%)'
            p={['0.10%', null, '0.20%']}
            >
                    <Heading
                       variant='banner'
                    >
                    Domina el Terreno
                    </Heading>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing='40px'
                        mt='30px'
                        w={['100%', null, 'auto']}
                    >
                        <Button
                            variant='outline'
                            size='lg'
                            textTransform='uppercase'
                            fontWeight='light'
                            borderRadius='0'
                            color='white'
                            letterSpacing='1px'
                            _hover={{
                                color: 'black',
                                bg: 'white'
                            }}
                            >
                            Ver detalles                           
                        </Button>
                        <Button
                            variant='outline'
                            size='lg'
                            textTransform='uppercase'
                            fontWeight='light'
                            borderRadius='0'
                            color='white'
                            letterSpacing='1px'
                            _hover={{
                                color: 'black',
                                bg: 'white'
                            }}
                        >
                        Ver videos            
                        </Button>
                    </Stack>
            </Flex>
        </Box>
    ) 

};

export default Header;