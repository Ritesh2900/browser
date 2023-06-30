import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
// import Trial from "./components/Trial";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
    </>
  );
}

export default App;
