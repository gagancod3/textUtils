// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// react-router-dom imports
// import {
//   Route,
//   BrowserRouter,
//   Routes,
// } from "react-router-dom";

//we're using HashRouter instead of BrowserRouter since this can work with github pages unlike BrowserRouter

import {
  Route,
  HashRouter as BrowserRouter,
  Routes,
} from "react-router-dom"; 


function App() { //functional component

  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = 'grey';
      let rootTag = document.getElementById('root');
      rootTag.style.backgroundColor = 'grey';
      // console.log(document.body.style.backgroundColor);
      showAlert("Dark mode has been enabled",'success');
      // document.title = 'TextUtils - Dark Mode';
    }
    else{ setMode('light');
    // document.body.style.backgroundColor = 'white';
    document.getElementById('root').style.backgroundColor = 'white';
    showAlert("Light mode has been enabled",'success' );
    // document.title = 'TextUtils - Light Mode';  
  }
  }

  return (
    //JSX
    // <>
    // {/* <h1>Hello JSX</h1> */}
    // <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    // <Alert alert={alert}/>
    // <div className='container'>
    // <TextForm heading='enter the details' mode={mode} showAlert={showAlert}/>
    // {/* <About /> */}
    // </div>
    // </>

    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils2"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>

  );
};

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
