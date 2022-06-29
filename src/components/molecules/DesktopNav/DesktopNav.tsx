import {
  Box,
  HStack,
  Link,
} from '@chakra-ui/react';

import nav_item from '../Header/constant';

const DesktopNav = () => {
  return (
    <HStack spacing={8} >
      {nav_item.map((navItem) => (
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
    </HStack>
  );
};

export default DesktopNav;