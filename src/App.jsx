import './App.css'
import Header from './componentes/header/Header.jsx'
import Footer from './componentes/footer/Footer.jsx'
import Section from './componentes/seccion/Seccion.jsx'
import Menu from './componentes/menu/Menu.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ListaJuguetes from './componentes/juguetes/Listajuguetes.jsx'
import DetalleJuguete from './componentes/juguetes/DetalleJuguete.jsx'

function App() {


  return (
    <Router>
      <div className='container'>
        <Header/>
        <Menu/>
        <main>
          <Routes>
            <Route path='/' element={<Section/>}/>  
            <Route path='/juguetes' element={<ListaJuguetes/>}/>  
            <Route path='/juguetes/DetalleJuguete/:id' element={<DetalleJuguete/>}/>                
            

          </Routes>
        </main>
        
        <Footer/>
        </div> 
    </Router>
  )
}

export default App
