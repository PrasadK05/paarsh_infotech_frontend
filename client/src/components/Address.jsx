import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";

export default function Address({ add }) {
  return (
    <Box mt="10px">
      <HStack>
        <HiLocationMarker color="#e8693d"/>
        <Text>Address</Text>
      </HStack>
      <Box pl="23px">
      <Text>{add}</Text>
      </Box>
    </Box>
  );
}
