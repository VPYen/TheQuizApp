// Libraries
import { Routes, Route } from "react-router-dom";

// Assets
import "./assets/styles/App.css";

// Components
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";

// Pages
import Categories from "./pages/Categories";

function App() {
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route index element={<Categories />} />
        <Route path="/" exact element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
