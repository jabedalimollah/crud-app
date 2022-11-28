import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./Component/CreatePost/CreatePost";
import Navigation from "./Component/Navbar/Navigation";
import ShowData from "./Component/ShowData/ShowData";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<ShowData />}></Route>
          <Route path="/create_post" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
