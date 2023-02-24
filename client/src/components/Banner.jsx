import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Banner({link, head}) {
  return (
    <Box
      w="100%"
      backgroundImage={link}
      h="90vh"
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Text
        fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        width={{ base: "90%", sm: "90%", md: "70%", lg: "50%" }}
        as="b"
        color={"#ffffff"}
        textAlign={"center"}
      >
        {head}
      </Text>
    </Box>
  );
}
