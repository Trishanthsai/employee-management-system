import Employeelist from "./Components/Employeelist"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import{BrowserRouter, Routes,Route}from'react-router-dom'
import { Employeecomponent } from "./components/Employeecomponent";
import UpdateEmployeeComponent from"./components/UpdateEmployeeComponent";


function App() {
  return (
    <>
      <BrowserRouter>
       <Header />
       <Routes>
        //http:localhost:3001
        <Route path='/' element={<Employeelist></Employeelist>}></Route>
        //http:localhost:3001/employees
        <Route path='/employees'element={<Employeelist></Employeelist>}></Route>
        <Route path='/add-employee'element={<Employeecomponent></Employeecomponent>}></Route>
        <Route path="/edit-employee/:id" element={<UpdateEmployeeComponent />} />
        </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App