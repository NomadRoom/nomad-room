import { Container } from "./styles";

interface iRoomPhoto {
  urlImg: string;
}

export const RoomPhoto = ({ urlImg }: iRoomPhoto) => {
  console.log(urlImg);

  return (
    <Container>
      <img src={urlImg} alt="" />
    </Container>
  );
};
