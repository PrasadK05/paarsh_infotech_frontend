import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ link, head, description }) {
  return (
    <Box
      w="100%"
      textAlign={"center"}
      p="0 10px 10px 10px"
      borderRadius={"20px"}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      _hover={{ color: "#ffffff", bg: "#ffa31a" }}
    >
      <Image src={link} m="auto" />
      <Text as="b" fontSize={"2xl"} _hover={{ color: "#1a202c" }}>
        {head}
      </Text>
      <Text>{description}</Text>
      <Link to="/course">
      <Text _hover={{ color: "#1a202c" }}>Apply Now</Text>
      </Link>
    </Box>
  );
}
