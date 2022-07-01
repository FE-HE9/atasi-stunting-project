import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Button,
  VStack
} from "@chakra-ui/react";

function Card(props: { product: string; summary: string; longLine: string; href:string}) {
  const { product, summary, longLine, href } = props;

  return (
    <Box
      p={6}
      display={{ md: "flex" }}
      maxWidth="350px"
      borderWidth={1}
    > 
      <VStack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        maxWidth="300px"
      >
        <Image
          maxWidth="300px"
          maxHeight="200px"
          src={href}
          alt="Woman paying for a purchase"
        />
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {product}
        </Text>
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {summary}
        </Link>
        <Text my={2} color="gray.500">
          {longLine}
        </Text>
        <Button maxWidth="100px" my={2}>
          Read More
        </Button>
      </VStack>
    </Box>
  );
}

export default Card;
