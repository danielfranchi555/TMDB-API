import { BrowserRouter, Route,Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"
import Context from "./Components/Context/Context";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <Context>
        <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </Context>
  
  )
}

export default App
