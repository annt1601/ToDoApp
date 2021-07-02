import React,{ Component } from 'react';
import axios from "axios";
import './App.css';
import Todo from "./components/todo"
import List from "./components/todolist"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      message:'',
      messages:''
    };
    this.sendMessageToServer = this.sendMessageToServer.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:6969/todo").then((res) => {
      //console.log(res.data)
      this.setState({
        messages:res.data
      });
    },
    error => {
      console.log(error);
    });
  }
  sendNewMessage(m){
    this.setState({
      message : m,
    });
    var a = this.state.messages
    a.push({
      message:m
    })
  }
  componentDidUpdate(){
    if(this.state.message){
      this.sendMessageToServer();
    }
  }
  
  sendMessageToServer(){
    const m = {
      message: this.state.message,
  };
  axios.post('http://localhost:6969/todo/new',{m})
      .then((res) => {
 
      }).catch((error) => {
          console.log(error)
      });
  }
  render(){
    return (
      <div className="App">
        <Todo sendMessage={this.sendNewMessage.bind(this)}></Todo>
        <List messages ={ this.state.messages}></List>
      </div>
    )
  }
}

export default App;
