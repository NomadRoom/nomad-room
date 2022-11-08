import { Card } from "./Card";

export const ListRooms = ({ rooms }: any) => {
  return (
    <ul>
      {rooms.length > 0 &&
        rooms.map((room: any) => <Card key={room.id} room={room} />)}
    </ul>
  );
};
