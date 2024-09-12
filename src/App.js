import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Services from "./pages/Services/Services";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/services' element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
