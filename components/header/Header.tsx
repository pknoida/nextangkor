import { Box, Container, Flex, Spacer } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { Headerbutton } from "./Headerbutton"

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
            <Container 
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between" 
                maxW='container.xl'
                flexDirection="row"       
            >
                <Logo/>
                
               <Headerbutton/>        
                
            </Container>
        </Box>
    ) 
}