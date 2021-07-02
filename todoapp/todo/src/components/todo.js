import React, { Component } from "react";

export default class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state={
      value :''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

    enterKey(e) {
        if (e.keyCode === 13) {
            this.props.sendMessage(this.state.value);
            this.setState({
              value:''
            });
        }
    }
  render(){
    return (
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange}
            onKeyUp={(e) => this.enterKey(e)}/>
          <button onClick={() => this.props.sendMessage(this.state.value)}>Add</button>
        </div>
      );
  }
}
