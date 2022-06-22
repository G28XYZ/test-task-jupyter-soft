import { MouseEvent } from "react";
import { IMAGES_ACTIONS } from "../../services/actions/images";
import { useStore } from "../../services/store";
import { namesTypeCard } from "../../utils/constants";
import { IImageCard } from "../../utils/types";
import Card from "../card/card";
import "./gallery.scss";

function Gallery() {
  const [state, dispatch] = useStore();
  const { showedCards, currentType } = state;

  const handleClickMore = () => {
    dispatch({ type: IMAGES_ACTIONS.GET_MORE_CARDS });
  };

  const navigationList = ["Show All", ...namesTypeCard];

  const filteredImageList = (showedCards as IImageCard[]).filter((item) => {
    if (currentType === "Show All") return true;
    return item.type === currentType;
  });

  const handleClickType = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    dispatch({
      type: IMAGES_ACTIONS.CHANGE_TYPE,
      cardType: target.textContent,
    });
  };

  return (
    <section className="gallery">
      <nav className="gallery__navigation">
        <ul className="gallery__list">
          {navigationList.map((type, index) => (
            <li
              key={index}
              onClick={handleClickType}
              className={`gallery__list-item ${
                currentType === type && "gallery__list-item_active"
              }`}
            >
              {type}
            </li>
          ))}
        </ul>
      </nav>
      <ul className="gallery__cardslist">
        {filteredImageList.map((image) => (
          <Card key={image.id} card={image} />
        ))}
      </ul>
      <button
        className="gallery__button button button_default"
        onClick={handleClickMore}
      >
        Load more
      </button>
    </section>
  );
}

export default Gallery;
