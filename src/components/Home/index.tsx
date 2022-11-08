import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../Global/Header";
import { HeadlineBig } from "../Global/Headlines/HeadlineBig";
import { Box, IconButton, Image, Text, Icon } from "@chakra-ui/react";

import { MdLocationPin } from "react-icons/md";

export const Homepage = () => {
  const [listRooms, setListRooms] = useState<any>([]);

  useEffect(() => {
    const getRooms = async () => {
      await api
        .get("/rooms")
        .then((resp) => {
          setListRooms(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getRooms();
  }, []);
  return (
    <>
      <>
        <Header />
        <HeadlineBig>
          <Text color="white" fontWeight="bold" fontSize="xxl">
            Descubra lugares, faça amizades
          </Text>
        </HeadlineBig>

        <ul>
          {listRooms.data?.length
            ? listRooms.data.map((e: any) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  my="5"
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
                      src={e.room_photo}
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
                      <Text
                        mx="5"
                        as="h2"
                        fontWeight="semibold"
                        fontSize="xl"
                        my="5"
                      >
                        {e.title}
                      </Text>
                      <Text mx="5" noOfLines={3}>
                        {e.description}
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
                        <Icon as={MdLocationPin} w={5} h={5} /> {e.localization.street} -{" "}
                        {e.localization.state}
                      </Text>
                    </Box>
                    <IconButton
                      aria-label="Search database"
                 
                      alignSelf="flex-start"
                      m="5"
                      position={"absolute"}
                      right="5"
                      top="2"
                    />
                  </Box>
                </Box>
              ))
            : ""}
        </ul>
      </>
    </>
  );
};
