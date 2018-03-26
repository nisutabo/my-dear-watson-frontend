import React, { Component } from 'react';
//import logo from './logo.svg';
import Home from './containers/Home'
import SelectAccount from './components/SelectAccount'
import SelectAttribute from './components/SelectAttribute'
import Analytics from './containers/Analytics'
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

  fetchAnalysis(){
    fetch(URL + 'twitter_accounts' + `/${this.state.currentAccount}` + `/${this.state.currentAttribute}`)
    .then(resp => resp.json())
    .then(json => console.log(json))
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
    this.fetchAnalysis()
  }


  render(){
    console.log(this.state.currentAccount)
    return (
      <div>
        <SelectAccount accounts={this.state.accounts} setCurrentAccount={this.setCurrentAccount}/>
        <SelectAttribute attributes={this.state.attributes} setCurrentAttribute={this.setCurrentAttribute}/>
        <Home currentAccount={this.state.currentAccount} currentAttribute={this.state.currentAttribute}/>
        <Analytics currentAccount={this.state.currentAccount}/>
      </div>
    )
  }
}

export default App;
