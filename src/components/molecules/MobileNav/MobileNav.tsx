import {
  Box,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import nav_item from '../Header/constant';

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {nav_item.map((navItem) => (
        // <MobileNavItem key={navItem.label} {...navItem} />
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href}
            fontSize={'sm'}
            fontWeight={500}
            _hover={{
              color: "#2b51cb",
            }}>
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default MobileNav;