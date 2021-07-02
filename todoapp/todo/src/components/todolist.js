import React, { Component } from "react";

export default class TodoList extends Component {
 
  render(){
  var list = this.props.messages;
  list = Array.from(list)
    return (
        <ul>
          {list.map((item,index) =>
          <li key={index}>
              {item.message}
          </li>
          )
          }
        </ul>
    );
  }
}
