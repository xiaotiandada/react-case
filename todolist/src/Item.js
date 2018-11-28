import React, { Component, Fragment } from "react";

class Item extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: false
    }
    this.delItem = this.delItem.bind(this)
  }

  delItem(){
    const {delList, index} = this.props
    delList(index)
  }

  getItem(){
    const { content } = this.props;

    return(
      <li>
        <span contenteditable={this.state.status}>{content}</span>
        <button onClick={this.delItem}>删除</button>
      </li>
    )
  }

  render() {
    return (
      <Fragment>
      {this.getItem()}
      </Fragment>
    )
  }
}

export default Item