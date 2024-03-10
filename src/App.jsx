
import './App.css'
import HeaderComponents from './components/HeaderComponents'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponents></HeaderComponents>
          <Routes>
            {/* //http:localhost:3000 */}
            <Route path='/' element={<ListEmployeeComponents/>}> </Route> 

            {/* //http:localhost:3000/employees */}
            <Route path='/employees' element={<ListEmployeeComponents/>}> </Route> 

            {/* //http:localhost:3000/add-employee */}
            <Route path='/add-employee' element ={<EmployeeComponent/>}>  </Route>

            {/* //http:localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element ={<EmployeeComponent/>}>  </Route>

          </Routes>
        <FooterComponent></FooterComponent>
     </BrowserRouter>
    </>
  )
}

export default App
