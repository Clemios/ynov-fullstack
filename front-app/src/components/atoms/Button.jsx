          
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({...props}) => {
    return(        
        <ChakraButton variant="outline" {...props}>Click me</ChakraButton>
    )
}

export default Button;