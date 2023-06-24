import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      spacing={4}
      borderWidth={1}
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      bg="white"
      w="100%"
    >
      <Image src={imageSrc} alt={title} w="100%" h={64} objectFit="cover" borderRadius="md" />

      <VStack align="start" spacing={2}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>

      <HStack alignSelf="end" spacing={2}>
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
