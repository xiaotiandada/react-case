import React, { Component, Fragment } from "react";
import Item from './Item'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }

    this.addList = this.addList.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.delList = this.delList.bind(this)
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

  getHead() {
    return (
      <div className='head-header'>
        <div className="head-content">
        <img className='head-logo' src={logo} alt=""/>
        <input className='head-input' value={this.state.inputValue} onChange={this.changeInput} type="text"/>
        <button className='head-button' onClick={this.addList}>添加</button>
        </div>
      </div>
    ) 
  }

  getItem() {
    return (
      this.state.list.map((item,index) => {
        return (
          <Item 
            delList={this.delList} 
            key={index} 
            content={item} 
            index={index} 
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        {this.getHead()}
        <ul className='item'>{this.getItem()}</ul>
      </Fragment>
    );
  }
}

export default App;
