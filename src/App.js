import './App.css';
import BuenosDias from './components/BuenosDias';
import HolaMundo, {AdiosMundo}  from './components/HolaMundo';
import Saludar from './components/Saludar';
import SaludarUser from './components/SaludarUser';
import Boton from './components/Boton';

function App() {
  const user0 = {
    nombre: "María del Carmen",
    anyos: 57,
    colorFav: "Rosa"
  }
  const user1 = {
    nombre: "Jimena",
    anyos: 20,
    colorFav: "Rojo"
  }

  return (
    <div className="App">
      <header className="App-header">
        <Saludar name = "Jaime Font" years = "17"/>
        <Saludar name = "Hannah Ford" years = "20"/>
        <BuenosDias />
        <Boton nombreUser ="Pilar"/>
        <SaludarUser userInfo={user0}/>
        <HolaMundo />
        <Saludar name = "Carmen García" years = "19"/>
        <Boton nombreUser = {user0.nombre
        }/>
        <AdiosMundo />
        <SaludarUser userInfo={user1}/>

      </header>
    </div>
  );
}

export default App;
