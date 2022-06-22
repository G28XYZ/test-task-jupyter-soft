import { IImageCard } from "../../utils/types";
import "./card.scss";

function Card({ card }: { card: IImageCard }) {
  return (
    <li className="card">
      <img src={card.image} alt={card.type} className="card__image" />
      <div className="card__info">
        <button className="card__button">{card.type}</button>
        <p className="card__name">{card.name}</p>
      </div>
    </li>
  );
}

export default Card;
