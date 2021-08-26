import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Car from './components/Car';
import { Navv, Routing } from './components/Navv';
import { Button } from 'react-bootstrap';
import { createContext } from 'react';


const LoginContext = createContext();

function App() {
  return (
    <div className="App">

      <Navv />

      <LoginContext.Provider>
        <h1>Hey there! Welcome to our Icy Heaven</h1>
        <h2>Just pick you favourite and you will have it in 10 minutes!</h2>

        <div>
          <h2 style={{ textAlign: "left" }}>Picks for the day:</h2>
          <Car />
          <Routing />
        </div>
      </LoginContext.Provider>




    </div>
  );
}

export default App;
