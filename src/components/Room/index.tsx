import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ContainerWrapper } from "../../styles/components/Container";
import { Header } from "../Global/Header";
import { RoomPhoto } from "./RoomPhoto";

interface iRoom {
  userId: number;
  title: string;
  description: string;
  about: {
    gym: boolean;
    internet: boolean;
    tv: boolean;
    garage: boolean;
    animals: boolean;
    furnished: boolean;
  };
  localization: {
    zip_code: string;
    district: string;
    state: string;
    street: string;
    number: number;
  };
  room_photo: string;
  contact: number;
  id: number;
}

export const Room = () => {
  const [room, setRoom] = useState({} as iRoom);
  const { id } = useParams();

  useEffect(() => {
    const getRoom = async () => {
      const response = await api.get(`/rooms/${id}`);
      const { data } = response;
      console.log(data);
      setRoom(data);
    };

    getRoom();
  }, [id]);

  return (
    <>
      {room.title ? (
        <>
          <Header />
          <ContainerWrapper>
            <RoomPhoto urlImg={room.room_photo} />
          </ContainerWrapper>
        </>
      ) : (
        ""
      )}
    </>
  );
};
