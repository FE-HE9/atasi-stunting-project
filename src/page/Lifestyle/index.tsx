import {
  Heading,
  Box, 
  SimpleGrid
} from '@chakra-ui/react';
import Card from '../../components/molecules/Card'
import LifestyleList from './LifestyleList'

export default function Lifestyle() {
  return(
    <Box ml={20}
      mt={10}
    >
      <Heading mb={4}>Lifestyle to Prevent Stunting Children</Heading>
      <SimpleGrid columns={[3]} p={5}>
        {LifestyleList.map(
          function (data) {
            const { id, product, summary, longLine, href } = data;
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
                href={href}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
}