import React, { Component } from "react";

class Item extends Component {

  constructor(props){
    super(props)
    this.delItem = this.delItem.bind(this)
  }

  delItem(){
    const {delList, index} = this.props
    delList(index)
  }

  render() {
    const { content } = this.props;
    return (
      <li onClick={this.delItem}>{content}</li>
    )
  }
}

export default Item