import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Organizer from "./components/Organizer/Organizer";
import Registration from "./components/Registration/Registration";
import ColorTabs from "./components/Schedule/Schedule";
import Venue from "./components/Venue/Venue";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Registration />
      <ColorTabs />
      <Organizer />
      <Venue />
    </div>
  );
}

export default App;
