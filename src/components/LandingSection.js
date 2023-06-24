import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Little Lemon";
const bio1 = "Family Reataurant";
const bio2 = "Please review our menu";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar size="xl" src=".images.photo1.jpg" />
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
