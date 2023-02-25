import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

let init = {
  name: "",
  email: "",
  contact: "",
  course: "",
};

export default function ApplyNow() {
  const [data, setData] = useState(init);
  const toast = useToast();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleClick = (e) => {
    e.preventDefault();

    setData(init);
  };

  let { name, email, contact, course } = data;
  return (
    <Box
      width={{ base: "95%", sm: "95%", md: "80%", lg: "40%" }}
      margin="auto"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      textAlign="center"
      px={"30px"}
      py="20px"
      mt="50px"
      borderRadius={"10px"}
    >
      <Text fontSize={"4xl"} as="b">
       Apply Now
      </Text>
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
            <FormLabel>Contact</FormLabel>
            <Input
              placeholder="Contact"
              type={"tel"}
              name="contact"
              value={contact}
              onChange={handleChange}
            />
          </FormControl>

          <Select
            placeholder="Select Course"
            mt={"20px"}
            name="course"
            value={course}
            onChange={handleChange}
          >
            <option value="Web Development">Web Development</option>
            <option value="Android-App Development">
              Android-App Development
            </option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="IOS Development">IOS Development</option>
          </Select>
          <FormControl mt={"20px"} bg="#7bafeb" border={"none"} color="white">
            <Input type={"submit"} value="Submit" />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
