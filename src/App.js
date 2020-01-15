import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails'
import SingIn from './component/auth/SingIn';
import SingUp from './component/auth/SingUp'
import CreateProject from './component/projects/CreateProject'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route  exact path='/'component={Dashboard}/>
          <Route path='/project/:id'component={ProjectDetails}/>
          <Route path='/singin'component={SingIn}/>
          <Route path='/singUp'component={SingUp}/>
          <Route path='/create'component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;