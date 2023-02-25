import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function UserCard({
  name,
  email,
  course,
  contact,
  subject,
  message,
  id,
  handleClick,
}) {
  let delFuc = (id) => {
    if (subject) {
      handleClick(id, "enquiry");
    } else {
      handleClick(id, "apply");
    }
  };
  return (
    <Box>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{course ? course : null}</Text>
      <Text>{contact ? contact : null}</Text>
      <Text>{subject ? subject : null}</Text>
      <Text>{message ? message : null}</Text>
      <Button onClick={() => delFuc(id)}>Delete</Button>
    </Box>
  );
}
