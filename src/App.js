import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './containers/Home'
import Select from './components/Select'
import Analytics from './containers/Analytics'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      accounts: [],
      currentAccount: ''
    }
  }

  componentDidMount(){
    this.fetchTwitterAccounts()
  }

  fetchTwitterAccounts(){
    fetch('http://localhost:9000/api/v1/twitter_accounts')
    .then(resp => resp.json())
    .then(json => this.setState({
      accounts: json
    }))
  }

  setCurrentAccount = event => {
    this.setState({
      currentAccount: event.target.value
    })
  }


  render(){
    console.log(this.state.currentAccount)
    return (
      <div>
        <Select accounts={this.state.accounts} setCurrentAccount={this.setCurrentAccount}/>
        <Home accounts={this.state.accounts}/>
        <Analytics currentAccount={this.state.currentAccount}/>
      </div>
    )
  }
}

export default App;
