import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

import genGigih from '/asset/gen-gigih.png';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"black"}
      color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 0.5fr' }}
            // columns={3} spacingX='40px' spacingY='20px'
            
          spacing={8}
          >
          <Stack spacing={6}>
            <Box>
                <Image src='/asset/logo-asti-putih.png' alt='ASTI' />
            </Box>
            <Text fontSize="m">
            ASTI (Atasi Stunting) is an application created by the GIGIH Generation participants that aims to help prevent stunting in Indonesia.
            </Text>
            <Text fontSize={'sm'}>
              © 2022 Generasi Gigih. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Supported By</ListHeader>
            <Image src='/asset/gen-gigih.png' alt='Generasi Gigih' />
            <Image src='/asset/kampus-merdeka.png' alt='Kampus Merdeka' />
            <Image src='/asset/yabb-putih.png' alt='YABB' />
            <Image src='/asset/goto.png' alt='goto' />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}