# todoLIst

## 简易版-todoList

```js
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  // 状态
  constructor(props){
    super(props)
    this.state = {
      list: [],  // 列表数据
      inputValue: ''  // 输入框数据
    }
  }
  
  // 添加列表数据
  addList(){
    // es6 语法
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 改变inputValue
  changeInput(e) {
    // 目标值
    let value = e.target.value
    this.setState({
      inputValue: value,
    })
  }

  // 删除列表数据
  delList(index) {
    // 拷贝值 删除
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
        // 数据绑定  改变事件绑定this
        <input value={this.state.inputValue} onChange={this.changeInput.bind(this)} type="text"/>
        // 添加事件 绑定this
        <button onClick={this.addList.bind(this)}>添加</button>
      </div>
        <ul>
        {
          this.state.list.map((item,index) => {
            return (
              // 删除事件 绑定this 传index
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

```