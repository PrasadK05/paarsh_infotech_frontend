import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export default function Navbar() {
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  let handleMouseEnter = () => {
    setState(!state);
  };

  return (
    <>
      <Box
        w="100%"
        h={{ base: "50px", sm: "50px", md: "80px", lg: "80px" }}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        display="flex"
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "flex-start",
          lg: "flex-start",
        }}
        color="#f7fcff"
        position={"sticky"}
        top="0"
        zIndex={90}
      >
        <Box
          pt={{ base: "2px", sm: "2px", md: "10px", lg: "10px" }}
          w={{ base: "50%", sm: "50%", md: "30%", lg: "30%" }}
          bg="#ffffff"
        >
          <Box
            display={"flex"}
            justifyContent="center"
            alignContent={"center"}
            gap="10px"
          >
            <Link to={"/"}>
              <Image
                src="/assets/parsh_logo2.png"
                alt="error"
              />
            </Link>
            <Link to="/">
              <Image
                src="/assets/paarsh_logo1.jpg"
                alt="error"
              />
            </Link>
          </Box>
        </Box>
        <Box
          w={{ base: "50%", sm: "50%", md: "70%", lg: "70%" }}
          pt={{ base: "5px", sm: "5px", md: "20px", lg: "20px" }}
          bg="#7bafeb"
          onMouseLeave={handleMouseEnter}
          position="relative"
        >
          <Box
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
            justifyContent={{
              base: "flex-end",
              sm: "flex-end",
              md: "flex-start",
              lg: "flex-start",
            }}
            alignContent={"center"}
            gap="30px"
            pl="40px"
          >
            <Box>
              <Link to={"/"}>
                <Text>Home</Text>
              </Link>
            </Box>
            <Box>
              <Link to="/course">
                <Text onMouseEnter={handleMouseEnter}>Course</Text>
              </Link>
            </Box>
            <Box>
              <Link to="/contact">
                <Text>Contact</Text>
              </Link>
            </Box>
          </Box>
          <Button
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            position="absolute"
            right={"10px"}
            bg="#7bafeb"
            _hover={{ bg: "#7bafeb" }}
            onClick={onOpen}
            ref={btnRef}
          >
            <FiMenu />
          </Button>
          <Box
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            w="250px"
            position={"absolute"}
            top="50px"
            left={{ base: "500px", sm: "500px", md: "110px", lg: "110px" }}
            bg="white"
            borderTop={"3px solid "}
            display={state ? "block" : "none"}
            onMouseLeave={handleMouseEnter}
            onMouseOver={() => setState(true)}
            color="black"
            zIndex={100}
          >
            <Link to="/course">
              <Text p="5px 10px">Web Development</Text>
            </Link>
            <Link to="/course">
              <Text p="5px 10px">Graphic Design</Text>
            </Link>
            <Link to="/course">
              <Text p="5px 10px">Android App Development</Text>
            </Link>
            <Link to="/course">
              <Text p="5px 10px">Digital Marketing</Text>
            </Link>
          </Box>
        </Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt="20px">
            <Box>
              <Link to={"/"}>
                <Text>Home</Text>
              </Link>
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              onClick={() => setShow(!show)}
            >
              <Text>Course</Text>
              {show ? <BiMinus /> : <BsPlusLg />}
            </Box>
            <Box display={show ? "block" : "none"}>
              <Link to="/course">
                <Text p="5px 10px">Web Development</Text>
              </Link>
              <Link to="/course">
                <Text p="5px 10px">Graphic Design</Text>
              </Link>
              <Link to="/course">
                <Text p="5px 10px">Android App Development</Text>
              </Link>
              <Link to="/course">
                <Text p="5px 10px">Digital Marketing</Text>
              </Link>
            </Box>
            <Box>
              <Link to="/contact">
                <Text>Contact</Text>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// onMouseEnter={handleMouseEnter}
