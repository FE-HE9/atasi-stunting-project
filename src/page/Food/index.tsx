import {
  Box,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import Card from '../../components/molecules/Card';
import FoodList from './FoodList';

export default function Food() {
  return(
    <Box ml={20}
      mt={10}
    >
      <Heading mb={4}>Food Recommendation for Pregnant Woman</Heading>
      <SimpleGrid columns={3}>
        {FoodList.map(
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