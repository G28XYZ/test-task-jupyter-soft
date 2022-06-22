import { useEffect } from "react";
import { fetchImages, IMAGES_ACTIONS } from "../../services/actions/images";
import { useStore } from "../../services/store";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import Preloader from "../preloader/preloader";

function App() {
  const [state, dispatch] = useStore();
  const { request } = state;

  const handleClickOutOverlay = (e: Event) => {
    const target = e.target as HTMLElement;
    const classList = Array.from(target.classList);
    if (!classList.some((clazz) => clazz.includes("overlay"))) {
      dispatch({ type: IMAGES_ACTIONS.SET_ACTIVE_CARD, card: null });
    }
  };

  const handleEscPress = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      dispatch({ type: IMAGES_ACTIONS.SET_ACTIVE_CARD, card: null });
    }
  };

  useEffect(() => {
    console.log("render app");
    if (request) {
      fetchImages(dispatch);
    }
  }, []);

  useEffect(() => {
    // сброс выделения карточки при нажатии за область карточки или на клавишу Esc
    document.addEventListener("keydown", handleEscPress);
    document.addEventListener("click", handleClickOutOverlay);
    return () => {
      document.removeEventListener("keydown", handleEscPress);
      document.removeEventListener("click", handleClickOutOverlay);
    };
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="content">{request ? <Preloader /> : <Gallery />}</main>
    </div>
  );
}

export default App;
