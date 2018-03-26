import React from 'react'

export default class Home extends React.Component {

  render(){
    const names = this.props.accounts.map(account => {
      return (
        <li>{account.handle}</li>
      )
    })
    console.log(this.props.accounts)
    return (
      <div>
      <h1>Check</h1>
      <ul>{names}</ul>
      </div>
    )
  }
}
