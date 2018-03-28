import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

import Analyze from './containers/Analyze.js'
import TraitPanel from './components/TraitPanel'

//import SelectAttribute from './components/SelectAttribute'
//import Analyze from './components/Analyze'
import './App.css';

const URL = 'http://localhost:9000/api/v1/';

class App extends Component {
  state = {
    accounts: [],
    currentHandle: '',
    currentTrait: ''
  };

  fetchTwitterAccounts() {
    fetch(URL + 'twitter_accounts')
      .then(resp => resp.json())
      .then(json => this.setState({
        accounts: json
      }));
  }

  postNewTwitterHandle(handle) {
    let body = {
      'handle': handle
    };

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body)
    };

    fetch(URL + 'twitter_accounts', options)
      .then(resp => resp.json())
      .then(json => {
        if (json.errors) {
          console.log(json.errors);
          // error stuff
          // redirect to
          // return <h1> does not exist </h1>
        } else {
          this.setState({
            accounts: [...this.state.accounts, json]
          });
          console.log(json);
          console.log(this.state.accounts);
        }
      });
  }

  setCurrentHandle = account => {
    this.setState({
      currentHandle: account
    });
  }

  setCurrentAttribute = event => {
    this.setState({
      currentAttribute: event.target.value
    });
  }

  componentDidMount() {
    this.fetchTwitterAccounts();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.currentHandle !== nextState.currentHandle){
      let accounts = this.state.accounts;
      if (!accounts.map(a => a.handle).includes(nextState.currentHandle)) {
        this.postNewTwitterHandle(nextState.currentHandle);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // redirect to "/analyze/:twitter_handle/:trait"

    let history = createHistory();
    if (this.state.currentHandle !== prevState.currentHandle){
      history.push(`${this.state.currentHandle}/personality`);
      history.go();
    }
  }

  render() {

    return (
      <div>
        <Route exact path="/analyze" render={() => (<Analyze accounts={this.state.accounts} setCurrentHandle={this.setCurrentHandle} />)} />
        <Route exact path="/analyze/:twitterHandle/:trait" render={props => {
          let twitterHandle = props.match.params.twitterHandle;
          let trait = props.match.params.trait;


          let twitterId = 0;
          if (this.state.accounts.find(a => a.handle === this.state.currentHandle)) {
            let account = this.state.accounts.find(a => a.handle === this.state.currentHandle);
            twitterId = account.id;
          }
          console.log(twitterId)
          return <TraitPanel twitterHandle={twitterHandle} twitterId={twitterId} trait={trait} />;
        }} />

      </div>
    )
  };
}

export default App;






// <Route exact path="/" component={Home} />
// <Route exact path="/analyze/:twitter_handle/:trait/compare" />



// <SelectAccount accounts={this.state.accounts} setCurrentAccount={this.setCurrentAccount}/>
// <SelectAttribute attributes={this.state.attributes} setCurrentAttribute={this.setCurrentAttribute}/>
// <Analyze currentHandle={this.state.currentAccount} currentAttribute={this.state.currentAttribute}/>
