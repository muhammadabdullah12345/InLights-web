import BgVideoPart1 from "./Components/BgVideoPart1";
import Contact from "./Components/Contact";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import MapPart from "./Components/MapPart";
import Product from "./Components/Product";
import Services from "./Components/Services";
import SuccessStories from "./Components/SuccessStories";
function App() {
  return (
    <div className="font-lato">
      <BgVideoPart1 />
      <MapPart />
      <Product />
      <Services />
      <SuccessStories />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
