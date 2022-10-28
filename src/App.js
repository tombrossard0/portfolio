import './App.css';
import Header from './components/header'
import Home from './components/home'
import {useState} from "react"


function App() {
  const [activePage] = useState("Home")

  return (
    <div className="App">
      <Header active={activePage}/>
      <Home/>
      <Home/>
    </div>
  );
}

export default App;