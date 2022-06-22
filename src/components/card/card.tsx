import { IImageCard } from "../../utils/types";
import "./card.scss";

function Card({ card }: { card: IImageCard }) {
  return (
    <li className="card">
      <img src={card.image} alt={card.type} className="card-image" />
      <button className="card__button">{card.type}</button>
    </li>
  );
}

export default Card;
