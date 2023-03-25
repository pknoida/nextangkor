import { Box } from "@chakra-ui/react"

export function Header(){
    return (
        <Box
        as="header"
        w="100%"
        h="100px"
        backgroundColor="#ffffff"
        boxShadow="lg"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="100"
        >
            Hello
        </Box>
    ) 
}