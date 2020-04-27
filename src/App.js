import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/Dashboard/dashboard';
import ProjectDeatail from './components/Project/ProjectDeatail';
import Signin from './components/Auth/Signin';
import SignUp from './components/Auth/SignUp';
import CreateProject from './components/Project/createProject';



class App extends Component{
  render(){
    return (
      <Router>
      <div className="App">
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Dashboard}/>
       <Route path="/signin" component={Signin}/>
       <Route path="/signup" component={SignUp}/>
       <Route path="/create" component={CreateProject}/>
       <Route path="/project/:id" component={ProjectDeatail}/>
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
