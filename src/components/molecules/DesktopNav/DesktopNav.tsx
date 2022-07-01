import {
  Box,
  HStack,
  Link,
} from '@chakra-ui/react';

import NavItem from '../Header/NavItem';

const DesktopNav = () => {
  return (
    <HStack spacing={8} >
      {NavItem.map((navitem) => (
        <Box key={navitem.label}>
          <Link
            p={2}
            href={navitem.href}
            fontSize={'sm'}
            fontWeight={500}
            _hover={{
              color: "#2b51cb",
            }}>
            {navitem.label}
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default DesktopNav;