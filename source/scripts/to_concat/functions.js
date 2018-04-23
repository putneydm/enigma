// import colors from "./modules/colors"

import React, { Component } from "../../../node_modules/react"
import ReactDOM from "../../../node_modules/react-dom"
import { Children, PropTypes } from 'react'

const app = document.querySelector("#app")

const initial = [{hello:"hello world"}]

const Head = ({val, action}) => {
  console.log(val)
  const clicky = () => {
    action(val)
  }
  return (
    <h1
      onClick={clicky}
    >
      {`${val}`}
    </h1>
  )
}

console.log("initial", initial[0].hello);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { initial }
    this.clicker = this.clicker.bind(this)

  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  clicker(val) {
    console.log("click", val);
  }
  render() {
    return (
      <Head
        val = {this.state.initial[0].hello}
        action = {this.clicker}
      />
    )
  }
}
ReactDOM.render(
  <App />, app
)
