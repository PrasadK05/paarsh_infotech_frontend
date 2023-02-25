import {
  Box,
  useToast,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLogin } from "../redux/auth/auth.action";

let init = {
  email: "",
  password: "",
};

export default function AdminLogin() {
  const [data, setData] = useState(init);
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleClick = (e) => {
    e.preventDefault();

    dispatch(getLogin(data))
      .then((res) => {
        toast({
          title: "login successfull.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/admin");
      })
      .catch((err) => {
        toast({
          title: "login unsuccessfull.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  let { email, password } = data;
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
        Admin Login
      </Text>
      <Box>
        <form onSubmit={handleClick}>
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
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Passwords"
              type={"password"}
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={"20px"} bg="#7bafeb" border={"none"} color="white">
            <Input type={"submit"} value="Submit" />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
