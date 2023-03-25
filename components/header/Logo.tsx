import { Text, Image, Box } from '@chakra-ui/react'

export function Logo(){
return (
    <Box
        display="flex"
        alignItems="center"
    >
       <Image src="/logo.png" /> 
        
        <Text fontSize="4xl">
        ANGKOR GLOBAL
        </Text>
    </Box>
)

}