import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ListSection from "./components/ListSection";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Navbar/>
      <Hero/>
      <ListSection/>
      <Footer/>
    </div>
  );
}

export default App;

