import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Team from './Team/Team'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Team  users = {this.state.users}></Team>
      </div>
    );
  }
  componentDidMount(){
    console.log(this.state);
    fetch('/users').then(res => res.json()).then(result=>{
      console.log(result);
      this. setState({users : result})
    }, error=>{
      console.log(error);
    });
  }
}

export default App;
