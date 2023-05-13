import Cart from "./Cart";
import Home from "./Home";
import NavBar from "./components/NavBar";
import { Route,Routes,BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="py-4 px-14">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  )
}