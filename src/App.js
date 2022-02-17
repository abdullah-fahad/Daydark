import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Home from './components/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Navbar />
     <Router>
       <Switch>
         <Route path="/" exact><Home /></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
