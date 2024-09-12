import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/team' element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
