import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { MdFavorite, MdFavoriteBorder, MdLocationPin } from "react-icons/md";

export interface iRoom {
  title: string;
  description: string;
  room_photo: string;
  id: string;
  localization: {
    street: string;
    state: string;
  };
}

export const Card = ({ room }: any) => {
  const {
    title,
    description,
    room_photo,
    localization: { state, street },
  } = room;
  return (
    <Box
      as="li"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my="5"
      cursor="pointer"
    >
      <Box
        w={["358px", "358px", "1170px", "1170px"]}
        rounded="8px"
        overflow="hidden"
        boxShadow="sm"
        bg="rgb(250 250 250)"
        display="flex"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        position={"relative"}
      >
        <Image
          src={room_photo}
          alt={`room photo`}
          maxW="298"
          maxH="158.67"
          minW="298"
          minH="158.67"
          rounded="8px"
          m="5"
        />
        <Box
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text mx="5" as="h2" fontWeight="semibold" fontSize="xl" my="5">
            {title}
          </Text>
          <Text mx="5" noOfLines={3}>
            {description}
          </Text>
          <Text
            mx="5"
            mt="1"
            fontWeight="normal"
            as="h4"
            lineHeight="tight"
            noOfLines={3}
            alignSelf="flex-start"
            m="5"
          >
            <Icon as={MdLocationPin} w={5} h={5} /> {street} - {state}
          </Text>
        </Box>
        <IconButton
          aria-label="Search database"
          icon={<MdFavoriteBorder />}
          fontSize="22px"
          alignSelf="flex-start"
          m="5"
          position={"absolute"}
          right="5"
          top="2"
        />
      </Box>
    </Box>
  );
};
