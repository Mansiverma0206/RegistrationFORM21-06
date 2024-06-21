import { Routes,Route } from "react-router-dom";
import Header from "./Component/Header"
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import DashBoard from "./Component/Dashboard";

const App = () =>{
  return<>
  <Header/>
  <Routes>
    <Route path="/register" element={ <Registration/>}/>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/logout' element={<DashBoard/>}/>
  </Routes>
  </>
}

export default App;