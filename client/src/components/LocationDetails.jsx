import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function LocationDetails() {
  return (
    <Box w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }} py="20px">
      <Box borderBottom={"3px solid #ff9900"} w="200px" mb="15px">
        <Text fontSize={"2xl"}>Our Located Place</Text>
      </Box>
      <Text color={"#ff9900"}>
        If you require any level of business support for our services, please
        get in touch with us via the methods below:
      </Text>
      <Box display={"flex"} flexDirection="column" gap="15px" mt="15px">
        <Box>
          <HStack>
            <Image
              src="https://as2.ftcdn.net/v2/jpg/02/54/62/25/1000_F_254622588_6OClHyYpak64rVI8y9QVjUvDlStsDEu9.jpg"
              alt="error"
              h="20px"
              w="20px"
            />
            <Text>
              {" "}
              Address: Paarsh Infotech Office no 2 Bhakti Apartment, Near Rasoi
              Hotel , Suchita{" "}
            </Text>
          </HStack>
          <Text pl="26px">Nagar Mumbai Naka Nashik 422001</Text>
        </Box>

        <Divider />

        <Box>
          <HStack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="error"
              h="20px"
              w="20px"
            />
            <Text>info@paarshinfotech.com</Text>
          </HStack>
        </Box>

        <Box>
          <HStack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="error"
              h="20px"
              w="20px"
            />
            <Text>paarshinfotech@gmail.com</Text>
          </HStack>
        </Box>
        <Divider />
        <Box>
          <HStack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/890/890547.png"
              alt="error"
              h="20px"
              w="20px"
            />
            <Text>+91 9860988343/ +91 9075201035</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
