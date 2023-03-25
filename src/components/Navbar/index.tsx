import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useDisclosure,
  Stack,
  useColorMode,
  HStack,
  IconButton,
  Link
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectWallet } from '@thirdweb-dev/react';
import NextLink from 'next/link'
import Logo from '../Logo';
import Logo2 from '../Logo2';

type Props = {
  href: string;
  children: ReactNode
};

const NavLink = (props: Props) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props.href}>
    {props.children}
  </Link>
);
const MenuLinks = [{name:'Home',href:'/'}, {name: 'Roulette', href: '/sardine-roulette'}];

export default function Nav() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}
          style={{
            zIndex: 999999,
            position: 'relative',
          }}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        
          <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          <HStack  spacing={8} alignItems={'center'} >
            <Link
              href='/'
              as={NextLink}
              px={2}
              py={1}
              rounded={'md'}
            >
            <Logo width={30} height={50} style={{ marginRight: 15}}/>
            </Link>
            <Link
                href='/'
                as={NextLink}
                px={2}
                py={1}
                rounded={'md'}
              >
              <Logo2 width={130} style={{ marginLeft: -60 }} />
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{base: 'none', md: 'flex'}}
              >
              {MenuLinks.map(({href, name})=> (
                <NavLink href={href} key={name}>{name}</NavLink>
                ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Stack direction={'row'} spacing={8} paddingRight={4}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack> */}
            <ConnectWallet 
              accentColor="#1E90FF"
              colorMode="dark"
              className="btn-connect-wallet"
            />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {MenuLinks.map((link) => (
                <NavLink href={link.href} key={link.name}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}