import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../Global/Header";
import { Text } from "@chakra-ui/react";
import { ListRooms } from "../Global/ListRooms";
import { HeadlineBig } from "../Global/Headlines/HeadlineBig";


export const Home = () => {
  const [listRooms, setListRooms] = useState<any>([]);

  useEffect(() => {
    const getRooms = async () => {
      await api
        .get("/rooms")
        .then((resp) => {
          setListRooms(resp.data);
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
        <ListRooms rooms={listRooms} />
      </>
    </>
  );
};
