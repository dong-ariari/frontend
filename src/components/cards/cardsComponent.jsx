import Cards from "./cards";
import { Layer } from "./cards.styles";
export default function CardsComponent({ small, cardList }) {
  return (
    <Layer>
      {cardList.map((item) => (
        <Cards key={item.key} small={small} data={item} />
      ))}
    </Layer>
  );
}
