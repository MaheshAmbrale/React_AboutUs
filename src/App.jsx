import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./container/navigation";
import AboutUs from "./container/sections/aboutUs";
import Sidebar from "./container/sidebar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="sidebar-with-container">
        <div className="sidebar--container">
          <Sidebar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="aboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
