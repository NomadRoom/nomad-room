import { MdLocationPin } from "react-icons/md";
import { iRoom } from "../..";
import { Container, Localization } from "./styles";
interface iTitleLocalization {
  room: iRoom;
}

export const TitleLocalization = ({ room }: iTitleLocalization) => {
  const { title, localization } = room;
  const { street, district } = localization;
  const fullLocalization = `${street}, ${district}`;

  return (
    <Container>
      <h2>{title}</h2>
      <Localization>
        <MdLocationPin />
        <p>{fullLocalization}</p>
      </Localization>
    </Container>
  );
};
