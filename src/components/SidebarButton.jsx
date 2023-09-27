import React from 'react';

import {
  Text,
  Button,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import SidebarIcon from '../assets/Icons/sidebar.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} bg={'none'} p={0} onClick={onOpen}>
        <Image src={SidebarIcon}></Image>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter alignItems={'center'}>
            <Flex justifyContent={'space-between'}>
              <Text>Username</Text>
              <Link to="/login">
                <Button colorScheme="blue">
                  <AiOutlineUser />
                </Button>
              </Link>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
