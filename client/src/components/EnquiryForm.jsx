import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

let init = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function EnquiryForm() {
  const [data, setData] = useState(init);
  const toast = useToast();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    setData(init);
  };
  let { name, email, subject, message } = data;
  return (
    <Box
      width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      margin="auto"
      //   textAlign="center"
      borderRadius={"10px"}
    >
      <Box>
        <form onSubmit={handleClick}>
          <FormControl mt={"20px"}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
              type={"text"}
              name="name"
              value={name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={"20px"}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              type={"email"}
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={"20px"}>
            <FormLabel>Subject</FormLabel>
            <Input
              placeholder="Subject"
              type={"text"}
              name="subject"
              value={subject}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={"20px"}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Message"
              type={"text"}
              name="message"
              value={message}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt={"20px"} border={"none"} color="white">
            <Input
              type={"submit"}
              bg="#ff9900"
              value="Submit"
              display={"block"}
              width={"100px"}
            />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
