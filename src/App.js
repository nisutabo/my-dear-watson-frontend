import React, { Component } from 'react';
//import logo from './logo.svg';

import SelectAccount from './components/SelectAccount'
import SelectAttribute from './components/SelectAttribute'
import Analyze from './components/Analyze'
import './App.css';

const URL = 'http://localhost:9000/api/v1/'

class App extends Component {
  constructor(){
    super()
    this.state = {
      accounts: [],
      attributes: ['personality', 'need', 'value', 'consumption_preference'],
      currentAccount: '',
      currentAttribute: 'personality'
    }
  }

  componentDidMount(){
    this.fetchTwitterAccounts()
  }

  fetchTwitterAccounts(){
    fetch(URL + 'twitter_accounts')
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

  setCurrentAttribute = event => {
    this.setState({
      currentAttribute: event.target.value
    })
  }


  render(){
    return (
      <div>
        <SelectAccount accounts={this.state.accounts} setCurrentAccount={this.setCurrentAccount}/>
        <SelectAttribute attributes={this.state.attributes} setCurrentAttribute={this.setCurrentAttribute}/>
        <Analyze currentAccount={this.state.currentAccount} currentAttribute={this.state.currentAttribute}/>
      </div>
    )
  }
}

export default App;
