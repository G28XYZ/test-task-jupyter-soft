import { MouseEvent, useMemo, useRef } from "react";
import { IMAGES_ACTIONS } from "../../services/actions/images";
import { useStore } from "../../services/store";
import { namesTypeCard } from "../../utils/constants";
import { IImageCard } from "../../utils/types";
import Card from "../card/card";
import "./gallery.scss";

function Gallery() {
  const [state, dispatch] = useStore();
  const { showedCards, currentType, imagesList, countCards } = state;
  const refOption = useRef(null);

  const handleClickMore = () => {
    dispatch({ type: IMAGES_ACTIONS.GET_MORE_CARDS });
  };

  const navigationList = ["Show All", ...namesTypeCard];

  const filteredImageList = useMemo(
    () =>
      (showedCards as IImageCard[]).filter((item) => {
        if (currentType === "Show All") return true;
        return item.type === currentType;
      }),
    [showedCards.length, currentType]
  );

  const handleClickType = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    dispatch({
      type: IMAGES_ACTIONS.CHANGE_TYPE,
      cardType: target.textContent,
    });
  };

  const onClickOption = () => {
    const option = refOption.current;
    const optionList = option.querySelector(
      ".gallery__navigation_dropdown-option-list"
    );
    option.classList.toggle("gallery__navigation_dropdown-option_active");
    optionList.classList.toggle(
      "gallery__navigation_dropdown-option-list_active"
    );
  };

  return (
    <section className="gallery">
      <div className="gallery__navigation_dropdown" onClick={onClickOption}>
        <div className="gallery__navigation_dropdown-container">
          <button
            onClick={onClickOption}
            className="gallery__navigation_dropdown-button"
            type="button"
          ></button>
          <p className="gallery__list-item gallery__navigation_dropdown-text">
            {currentType}
          </p>
        </div>
        <div ref={refOption} className="gallery__navigation_dropdown-option">
          <ul className="gallery__navigation_dropdown-option-list">
            {namesTypeCard.map((name) => (
              <li
                key={name}
                onClick={handleClickType}
                className="gallery__list-item gallery__navigation_dropdown-option-item"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
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
        {filteredImageList.length === 0 ? (
          <>
            <p className="gallery__notfound-message">
              Ничего не найдено ¯\_(ツ)_/¯
            </p>
          </>
        ) : (
          filteredImageList.map((image) => <Card key={image.id} card={image} />)
        )}
      </ul>
      {imagesList.length > countCards && (
        <button
          className="gallery__button button button_default"
          onClick={handleClickMore}
        >
          Load more
        </button>
      )}
    </section>
  );
}

export default Gallery;
