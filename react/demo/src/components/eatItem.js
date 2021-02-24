import React, { Component } from 'react'

class EatItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {  // 只在页面刷新的时候执行一次 1
    console.log('componentWillMount---组件将要挂载到页面');
  }
  componentDidMount() { // // 只在页面刷新的时候执行一次  3
    console.log('componentDidMount---组件挂载完成');
  }
  shouldComponentUpdate(nextProps, nextState) {  // 4
    console.log('shouldComponentUpdate---组件发生改变之前执行');
    // 解决子组件的无意义渲染
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
    // console.log(nextProps);
    // return false
  }
  componentWillUpdate() {  //  5
    console.log('componentWillUpdate---组件更新之前执行');
  }
  componentDidUpdate() {   //  7
    console.log('componentDidUpdate---组件更新完成');
  }
  render() {  //2 //6
    console.log('render---组件挂载中');
    return (
      <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
    );
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount---卸载');
  }

  handleClick() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
  }
}

export default EatItem;