import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ApplyNow from "../components/ApplyNow";
import Banner from "../components/Banner";

export default function Course() {
  return (
    <>
    <Banner
    link={"http://paarshinfotech.com/assets/img/web-development.jpg"}
    />
      <Box
        width={{ base: "95%", sm: "95%", md: "95%", lg: "60%" }}
        m="auto"
        display="flex"
        flexDirection={"column"}
        gap="15px"
        mt="30px"
      >
        <Text as="b" fontSize="4xl">
          Web Design and Development Company In Nashik
        </Text>
        <Text>
          <Link to="/">Paarsh infotech Pvt Ltd</Link> is a Best Web Development
          Company In Nashik. Paarsh infotech Pvt Ltd has been promptly
          delivering professional web designing, content management , and web
          development services for years to start-ups and established
          Enterprises in the IT World.
        </Text>
        <Text>
          We create both corporate web design as well as custom web design. WAMP
          is the most advanced technology for web application and open-source
          application development.
        </Text>
        <Text>
          Web Development is a powerful, open-source platform that consists of
          the Windows operating system. It includes:
        </Text>
        <Text>1. PHP - PHP is the object-oriented scripting language.</Text>
        <Text>2. Apache-Apache is a web server.</Text>
        <Text>3. MySQL-MySQL is a relational database managing system.</Text>
        <Text>
          Paarsh infotech Pvt Ltd has been designing sites above your
          imagination. Our services are unique and distinct from other web
          development company.
        </Text>
        <Text>
          Our corporate web design service has designed to suit all your custom
          web design services. Paarsh infotech Pvt Ltd is also guaranteeing top
          results in the search engine ranking of your website with the help of
          our website development team.
        </Text>
        <Image
          src="http://paarshinfotech.com/assets/img/web-development-1.jpg"
          alt="error"
          width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
          m="auto"
        />
      </Box>
      <ApplyNow />
    </>
  );
}
