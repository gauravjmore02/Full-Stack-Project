
import './App.css'
import EmployyeeComponent from './components/EmployyeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponunt from './components/ListEmployeeComponunt'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
   <>
   <BrowserRouter>
   <HeaderComponent/>
   <Routes>
      <Route path='/' element={<ListEmployeeComponunt/>}></Route>
      <Route path='/employees' element={<ListEmployeeComponunt/>}></Route>
      <Route path='/add-employee' element={<EmployyeeComponent/>}></Route>
      <Route path='/edit-employee/:id' element={<EmployyeeComponent/>}></Route>
    </Routes>
   <FooterComponent/>
   </BrowserRouter>
   </>
  )
}

export default App
