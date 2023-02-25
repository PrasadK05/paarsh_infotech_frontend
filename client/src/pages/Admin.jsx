import { Box, Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import { funForApplied, funForEnquiry } from "../redux/data/data.action";

let delItem = async (id, collection) => {
  try {
    let res = await axios.delete(
      `https://paarsh-server.onrender.com/${collection}/${id}`
    );

    if (res.data.status) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export default function Admin() {
  const { All_data } = useSelector((store) => store.adminData);
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  let handleApplied = () => {
    dispatch(funForApplied());
  };

  let handleEnq = () => {
    dispatch(funForEnquiry());
  };

  let handleClick = (id, col) => {
    if (col == "enquiry") {
      delItem(id, col)
        .then((res) => {
          toast({
            title: "enquiry deleted successfull.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          dispatch(funForEnquiry());
        })
        .catch((err) => {
          return toast({
            title: "enquiry deleted unsuccessfull.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    } else {
      delItem(id, col)
        .then((res) => {
          toast({
            title: "data deleted successfull.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          dispatch(funForApplied());
        })
        .catch((err) => {
          return toast({
            title: "data deleted unsuccessfull.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };

  useEffect(() => {
    if (isAuth == false) {
      navigate("/admin-login");
    }
    dispatch(funForApplied());
  }, []);

  return (
    <>
      <Box w="70%" m="auto" mt="30px" display={"flex"} gap="40px">
        <Button onClick={handleApplied}>Applied</Button>
        <Button onClick={handleEnq}>Enquiries</Button>
      </Box>
      <Box
        w={{ base: "100%", sm: "100%", md: "80%", lg: "70%" }}
        m={"auto"}
        display={"grid"}
        gap="10px"
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(4,1fr)",
        }}
        mt="30px"
      >
        {All_data &&
          All_data.map((el) => {
            return (
              <UserCard
                key={el._id}
                id={el._id}
                name={el.name}
                email={el.email}
                subject={el.subject}
                message={el.message}
                contact={el.contact}
                course={el.course}
                handleClick={handleClick}
              />
            );
          })}
      </Box>
    </>
  );
}
