import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  
  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  changeInput(e) {
    let value = e.target.value
    this.setState({
      inputValue: value,
    })
  }

  delList(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div>
      <div>
        <input value={this.state.inputValue} onChange={this.changeInput.bind(this)} type="text"/>
        <button onClick={this.addList.bind(this)}>添加</button>
      </div>
        <ul>
        {
          this.state.list.map((item,index) => {
            return (
              <li key={index} onClick={this.delList.bind(this, index)}>{item}</li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
