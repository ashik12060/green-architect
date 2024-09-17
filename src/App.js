import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>

          <Route path='/team' element={<Team />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
