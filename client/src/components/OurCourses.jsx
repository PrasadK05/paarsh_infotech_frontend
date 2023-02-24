import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CourseCard from "./CourseCard";

let data = [
  {
    id: 1,
    img: "http://paarshinfotech.com/assets/img/paarsh-website-icons-01.svg",
    text: "Web development is the work involved in developing a Web site for the Internet.We believe in designing a user-friendly website to beat the industry standard.",
    head: "Web Development",
  },
  {
    id: 2,
    img: "http://paarshinfotech.com/assets/img/paarsh-website-icons-03.svg",
    text: "Mobile devices and smartphones have become increasingly popular and important. They have completely transformed the way we do business today.",
    head: "Android-App Development",
  },
  {
    id: 3,
    img: "http://paarshinfotech.com/assets/img/paarsh-website-icons-06.svg",
    text: "Digital marketing is the component of marketing that utilizes internet and online based digital technologies.",
    head: "Digital Marketing",
  },
  {
    id: 4,
    img: "http://paarshinfotech.com/assets/img/paarsh-website-icons-04.svg",
    text: "IOS Developers design and build applications for mobile devices running Apple’s iOS operating software.",
    head: "IOS Development",
  },
];

export default function OurCourses() {
  return (
    <Box
      w={{ base: "90%", sm: "90%", md: "90%", lg: "70%" }}
      m="auto"
      textAlign={"center"}
      mt="30px"
    >
      <Text as="b" fontSize={"3xl"}>
        Our Courses
      </Text>
      <Box
        w={{ base: "90%", sm: "90%", md: "100%", lg: "85%" }}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap="20px"
        m="auto"
        mt="20px"
      >
        {data.map((el) => {
          {
            return (
              <CourseCard
                key={el.id}
                link={el.img}
                head={el.head}
                description={el.text}
              />
            );
          }
        })}
      </Box>
    </Box>
  );
}
