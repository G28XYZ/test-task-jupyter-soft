import { IMAGES_ACTIONS } from "../../services/actions/images";
import { useStore } from "../../services/store";
import { IImageCard } from "../../utils/types";
import "./card.scss";

function Card({ card }: { card: IImageCard }) {
  const [state, dispatch] = useStore();
  const { activeCard } = state;

  const active = activeCard && activeCard.id === card.id;

  const handleToggleCard = () => {
    dispatch({
      type: IMAGES_ACTIONS.SET_ACTIVE_CARD,
      card: active ? null : card,
    });
  };
  const handleDeleteCard = () => {
    dispatch({ type: IMAGES_ACTIONS.DELETE_CARD, id: card.id });
  };
  const handleChangeType = () => {
    dispatch({ type: IMAGES_ACTIONS.CHANGE_TYPE, cardType: card.type });
  };

  return (
    <li className={`card`}>
      <div
        className={`card__overlay ${active && "card__overlay_active"}`}
        onClick={handleToggleCard}
      ></div>
      <img src={card.image} alt={card.type} className={`card__image`} />
      <div className="card__info">
        <button className="card__button overlay" onClick={handleChangeType}>
          {card.type}
        </button>
        <p className="card__name overlay">{card.name}</p>
      </div>
      {active && (
        <button className="card__button-delete" onClick={handleDeleteCard}>
          Del
        </button>
      )}
    </li>
  );
}

export default Card;
