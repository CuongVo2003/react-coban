import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDoapp from "./ToDo/ListToDoapp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from "./Nav/Navbar";
import Home from "./Example/Home";
// import axios from "axios";
/**
 *  2 component : class component / functions component ( function, arrow[ const App = ()=> {}]) JSX
 *                                                                       [ function App(){ }]
 *
 *
 *
 */

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <MyComponent /> */}
        {/* <ListToDoapp /> */}
        <Switch>
          <Route path="/home" exact>
            <Home />  
          </Route>
          <Route path="/todo">
            <ListToDoapp/>
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
        </Switch>
      </header>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
