import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext/hook";
import { api } from "../../../services/api";
import { ContainerWrapper } from "../../../styles/components/Container";
import { Card } from "./Card";

export const ListRooms = ({ rooms }: any) => {
  const { userInfo } = useAuthContext();
  const navigate = useNavigate();
  const favRoom = (event: any) => {
    const btnFav = event.target.closest(".favBtn");

    if (userInfo.id) {
      if (!btnFav) {
        const idCard = event.target.closest("li").id;
        idCard && navigate(`/room/${idCard}`);
      } else {
        const Fav = async () => {
          const roomFav = rooms.filter((room: any) => room.id == btnFav.id);
          const data = roomFav[0];

          const response = await api.post("/favorites", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "@NomadRoom:token"
              )}`,
            },
          });
        };
        Fav();
      }
    } else {
      navigate(`/login`);
    }
  };
  return (
    <ContainerWrapper>
      <ul onClick={(event) => favRoom(event)}>
        {rooms.length > 0 &&
          rooms.map((room: any) => (
            <Card key={room.id} id={room.id} room={room} />
          ))}
      </ul>
    </ContainerWrapper>
  );
};
