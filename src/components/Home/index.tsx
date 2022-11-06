import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { StyledHome } from "./StyledHome";

export const Homepage = () => {

  const [listRooms, setListRooms] = useState<any>([])

  useEffect(() => {
    const getRooms = async () => {
      await api.get("/rooms")
      .then((resp) => {
        setListRooms(resp)
        console.log(resp)
      }
      )
      .catch((err) => {
        console.log(err);
      });
    }
    getRooms()
  }, [])
  return (
    <>
      <StyledHome>
        <div className="mensage">
          <h1>Descubra lugares, faça amizades</h1>
        </div>

        <ul>
          {console.log(listRooms) as any}
          {listRooms.data?.length ?
            listRooms.data.map((e:any) => (
              <li className="card" key={(e.id)}>
                <img src={e.room_photo} alt="room" />
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <span>{e.localization.street} - {e.localization.state}</span>
                </div>
                <button>S2</button>
              </li>
            ))  
        : ''}
        </ul>
      </StyledHome>
    </>
  );
};
