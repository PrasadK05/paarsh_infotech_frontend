import { Box, HStack, Image, VStack, Button, Text } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import Address from "./Address";

export default function Footer() {
  return (
    <>
    <Box w="100%" mt="30px" color="#ffffff" bg="#121f34" p="15px 0px">
      <Box
        w={{ base: "90%", sm: "90%", md: "90%", lg: "80%" }}
        m="auto"
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="20px"
      >
        <Box>
          <Image
            src="/assets/paarsh_logo3.jpg"
            alt="error"
            mb="10px"
          />
          <Text mb="10px">
            Paarsh Infotech Pvt Ltd provides more than website design and
            Software development..
          </Text>
          <HStack>
            <Button bg="#e8693d" borderRadius={"48%"}>
              <FaFacebookF color="#ffffff" />
            </Button>
            <Button bg="#e8693d" borderRadius={"48%"}>
              <BsTwitter color="#ffffff" />
            </Button>
            <Button bg="#e8693d" borderRadius={"48%"}>
              <GrInstagram color="#ffffff" />
            </Button>
            <Button bg="#e8693d" borderRadius={"48%"}>
              <BsYoutube color="#ffffff" />
            </Button>
            <Button bg="#e8693d" borderRadius={"48%"}>
              <BsLinkedin color="#ffffff" />
            </Button>
          </HStack>
        </Box>
        <Box>
          <Text fontSize={"2xl"} as="b">
            Get In Touch
          </Text>
          <Address
            add={
              "Paarsh Infotech Pvt Ltd. Office no 1 Bhakti Apartment, Near Rasoi Hotel , Suchita Nagar Mumbai Naka Nashik 422001"
            }
          />
          <Address
            add={
              "Paarsh Infotech Pvt Ltd. Behind Bank of Maharashtra, Near Indrakund Devasthan, Panchavati Karanja, Nashik-422003"
            }
          />
        </Box>
        <Box>
          <Text fontSize={"2xl"} as="b">
            Get In Touch
          </Text>

          <Box mt="10px">
            <HStack>
              <BsFillTelephoneFill color="#e8693d" />
              <Text>Phone</Text>
            </HStack>
            <Box pl="23px">
              <Text>+91 9860988343/+91 9075201035</Text>
            </Box>
          </Box>

          <Box mt="10px">
            <HStack>
              <MdOutlineMailOutline color="#e8693d" />
              <Text>Email</Text>
            </HStack>
            <Box pl="23px">
              <Text>parshinfotech@gmail.com</Text>
            </Box>
          </Box>

          <Box mt="10px">
            <HStack>
              <MdOutlineMailOutline color="#e8693d" />
              <Text>Email</Text>
            </HStack>
            <Box pl="23px">
              <Text>info@parshinfotech.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box w="100%" h="60px" color="#ffffff" bg="#121f34" display={"flex"} justifyContent="center" alignItems={"center"}>
        <Text>Copyright ©2022 PAARSH INFOTECH PVT LTD. </Text>
    </Box>
    </>
  );
}
