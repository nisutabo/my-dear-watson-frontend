import React from 'react'
//import Analysis from './components/Analysis'

export default class Analytics extends React.Component {

  constructor (){
    super()
    this.state = {
      analytic: ''
    }
  }


  render(){
    return (
      <div>
        <h1>{this.props.currentAccount}</h1>
      </div>
    )
  }
}
