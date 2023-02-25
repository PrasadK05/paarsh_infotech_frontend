import { Box } from "@chakra-ui/react";
import React from "react";
import Banner from "../components/Banner";
import Enquiry from "../components/Enquiry";
import LocationDetails from "../components/LocationDetails";

export default function Contact() {
  return (
    <>
      <Banner link={"http://paarshinfotech.com/assets/img/about6.jpg"} />
      <Box
        w={{ base: "95%", sm: "95%", md: "95%", lg: "80%" }}
        m="auto"
        display={"flex"}
        gap="10%"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <LocationDetails />
        <Enquiry />
      </Box>
      <Box w="100%">
        <iframe
          height="400px"
          width="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=PAARSHINFOTECHPVTLTD&t=&z=13&ie=UTF8&iwloc=&output=embed"          
        ></iframe>
      </Box>
    </>
  );
}
