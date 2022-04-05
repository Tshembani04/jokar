// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from "./component/About";
import Community from "./component/Community";
import Drops from "./component/Drops";
import Home from "./component/Home";
import MarketPlace from "./component/MarketPlace";
import Navbar from './component/Navbar'

function App() {

  return (
    <>
    <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/community" element={<Community />} />

      </Routes>
 
    </>
  )
}

export default App
