import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";  
import { Fragment } from 'react' 
import NavBar from './components/NavBar/NavBar.js'
import { content } from './components/NavBar/NavBar.js'

function App() {
  return (
    <Fragment>
      <NavBar />
    </Fragment>
  );
}

export default App;
