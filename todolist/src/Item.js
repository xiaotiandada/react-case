import React, { Component, Fragment } from "react";

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
      <Fragment>
        <li>{content}<button onClick={this.delItem}>删除</button></li>
      </Fragment>
    )
  }
}

export default Item