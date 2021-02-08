import {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state={
    username:'Pratik'
  }
  eventHandler=(event)=>{

  this.setState({
    username:event.target.value
  })
}
  render(){
    return(
      <div className="App">
        <h1>This is react</h1>
        <UserInput change={this.eventHandler}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Raj"/>
      </div>
    )
  }
}



export default App;
