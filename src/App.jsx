import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Bollywood from "./Components/Bollywood";
import Hollywood from "./Components/Hollywood";
import Technology from "./Components/Technology";
import Fitness from "./Components/Fitness";
import Food from "./Components/Food";
import Blog from "./Components/Blog";
import { useLocation } from "react-router-dom";
import AddBlog from "./Components/BlogAdd/AddBlog";

function App() {
  const location = useLocation();
  console.log("Final page location", location);
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/Bollywood" element={<Bollywood />} />
          <Route path="/category/Hollywood" element={<Hollywood />} />
          <Route path="/category/Technology" element={<Technology />} />
          <Route path="/category/Fitness" element={<Fitness />} />
          <Route path="/category/Food" element={<Food />} />

          <Route path="/category/addBlog" element={<AddBlog />} />
          {location.state !== null && (
            // <Route path="/Blog" element={<Blog />} />
            <Route
              // path={`/catagory/:${location.state.category}/:${location.state.index}`}
              path={`/category/${location.state.category}/${location.state.index}`}
              element={<Blog />}
            />
          )}
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
