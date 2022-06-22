import { IMAGES_ACTIONS } from "../../services/actions/images";
import { useStore } from "../../services/store";
import Card from "../card/card";
import "./gallery.scss";

function Gallery() {
  const [state, dispatch] = useStore();
  const { imagesList, countCards } = state;

  const handleClickMore = () => {
    dispatch({ type: IMAGES_ACTIONS.GET_MORE_CARDS });
  };

  return (
    <section className="gallery">
      <nav className="gallery__navigation">
        <ul className="gallery__list">
          <li className="gallery__list-item gallery__list-item_active">
            Show All
          </li>
          <li className="gallery__list-item">Design</li>
          <li className="gallery__list-item">Branding</li>
          <li className="gallery__list-item">Illustration</li>
          <li className="gallery__list-item">Motion</li>
        </ul>
      </nav>
      <ul className="gallery__cardslist">
        {imagesList.splice(0, countCards).map((image) => (
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
