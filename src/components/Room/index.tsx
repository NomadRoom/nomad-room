import { userInfo } from "os";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ContainerWrapper } from "../../styles/components/Container";
import { Header } from "../Global/Header";
import { Contact } from "./Contact";
import { RoomDescription } from "./RoomDescription";
import { RoomPhoto } from "./RoomPhoto";
import { ContainerPhotoContact } from "./styles";

export interface iUser {
  email: string;
  password: string;
  name: string;
  last_name: string;
  age: number;
  genre: string;
  profession: string;
  profile_photo: string;
  validation: boolean;
  id: number;
}

export interface iRoom {
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
  user: iUser;
}

export const Room = () => {
  const [room, setRoom] = useState({} as iRoom);
  const { id } = useParams();
  console.log(room.contact);
  console.log(room.user);

  useEffect(() => {
    const getRoom = async () => {
      const response = await api.get(`/rooms/${id}`, {
        params: {
          _expand: "user",
        },
      });
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
            <ContainerPhotoContact>
              <RoomPhoto urlImg={room.room_photo} />
              <Contact contact={room.contact} user={room.user} />
            </ContainerPhotoContact>

            <RoomDescription room={room} />
          </ContainerWrapper>
        </>
      ) : (
        ""
      )}
    </>
  );
};
