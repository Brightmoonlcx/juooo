import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
}from "react-router-dom";
import Theater from './views/theater/Theater';
import Ticket from './views/ticket/Ticket';
import My from './views/my/My';
import Index from "./views/Index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/"} component={Index}></Route>
          <Route path={"/theater"} component={Theater}></Route>
          <Route path={"/ticket"} component={Ticket}></Route>
          <Route path={"/my"} component={My}></Route>
          <Route path={"/error"} component={()=>(<div>404</div>)}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
