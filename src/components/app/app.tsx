import { useEffect } from "react";
import { fetchImages } from "../../services/actions/images";
import { useStore } from "../../services/store";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import Preloader from "../preloader/preloader";

function App() {
  const [state, dispatch] = useStore();
  const { request } = state;

  useEffect(() => {
    console.log("render app");
    if (request) {
      fetchImages(dispatch);
    }
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="content">{request ? <Preloader /> : <Gallery />}</main>
    </div>
  );
}

export default App;
