import AllComponent from "./Components/AllComponent";
import Banner from "./Home/Banner";
import BestDeal from "./Home/BestDeal";
import Contact from "./Home/Contact";
import Featured from "./Home/Featured";
import Footer from "./Home/Footer";
import Fun from "./Home/fun";
import Properties from "./Home/Properties";
import Video from "./Home/Video";

function App() {

  return (
    <div className="App">
       <AllComponent />
       <Banner />
       <Featured/>
       <Video/>
       <Fun/>
       <BestDeal/>
       <Properties/>
       <Contact />
       <Footer/>

    </div>
  );
}

export default App;
