import React from 'react';
import {
    Button
  } from "@chakra-ui/react";

interface Props{
  className: string;
  text?: React.ReactNode;
}

const OutlineButton: React.FC<Props> = ({
    className,
    text,}) => (
	<Button             
        variant="outline"
        borderColor="#2b51cb"
        color="#2b51cb"
        _hover={{ bg: "#2b51cb", color:"white"}}
        className={className}
    > 
        {text}
    </Button>
);

export default OutlineButton;