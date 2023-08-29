import "./App.css";
import Hero from "./components/Hero";
import RecentPosts from "./components/RecentPosts";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      <RecentPosts />
      <FeaturedWork />
      <Footer />
    </div>
  );
}

export default App;
