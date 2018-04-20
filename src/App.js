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
    currentID: '',
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

  setCurrentHandle = (account) => {
    if (account.includes('-')){
      let accountName = account.split('-')[1]
      let accountID = account.split('-')[0]
      this.setState({
        currentID: accountID,
        currentHandle: accountName,
      });
    } else {
      this.setState({
        currentHandle: account,
      });
    }

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
      history.push(`/analyze/${this.state.currentID}-${this.state.currentHandle}/personality`);
      history.go();
    }
  }

  render() {
    console.log(this.state.currentID)
    console.log(this.state.currentHandle)
    return (
      <div className='container'>
        <Route exact path="/analyze" render={() => (<Analyze accounts={this.state.accounts} setCurrentHandle={this.setCurrentHandle} />)} />
        <Route exact path="/analyze/:id-:twitterHandle/:trait" render={props => {
          let twitterHandle = props.match.params.twitterHandle;
          let trait = props.match.params.trait;
          let id = props.match.params.id;
          return <TraitPanel twitterHandle={twitterHandle} twitterId={id} trait={trait} />;
        }} />
      </div>
    )
  };
}

export default App;






// <Route exact path="/" component={Home} />
// <Route exact path="/analyze/:twitter_handle/:trait/compare" />

// if (this.state.accounts.find(a => a.handle === this.state.currentHandle)) {
//   let account = this.state.accounts.find(a => a.handle === this.state.currentHandle);
//   twitterId = account.id;
// }



// <SelectAccount accounts={this.state.accounts} setCurrentAccount={this.setCurrentAccount}/>
// <SelectAttribute attributes={this.state.attributes} setCurrentAttribute={this.setCurrentAttribute}/>
// <Analyze currentHandle={this.state.currentAccount} currentAttribute={this.state.currentAttribute}/>
