import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function EnquiryCard({ name, email, subject, message }) {
  return (
    <Box>
      <Text>Name:{name}</Text>
      <Text>Email:{email}</Text>
      <Text>Subject:{course}</Text>
      <Text>Message:{contact}</Text>
      <Button>Delete</Button>
    </Box>
  );
}
