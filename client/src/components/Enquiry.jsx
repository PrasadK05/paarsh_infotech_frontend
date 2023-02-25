import { Box, Text } from "@chakra-ui/react";
import React from "react";
import EnquiryForm from "./EnquiryForm";


export default function Enquiry() {
  return (
    <Box w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }} py="20px">
      <Box borderBottom={"3px solid #ff9900"} w="100px" mb="15px">
        <Text fontSize={"2xl"}>Enquiry</Text>
      </Box>
      <EnquiryForm/>
    </Box>
  );
}
