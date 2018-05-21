import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { fetchAccounts } from './actions';
import Home from './containers/Home'
import  Nav  from './components/Nav';

class App extends Component {


 componentDidMount(){
   this.props.fetchAccounts()
 }


  render() {
    return (
      <div>
        <Nav />
        <MuiThemeProvider>
          <Route exact path='/' component={Home}/>
        </MuiThemeProvider>
      </div>
    )
  };
}

function mapStateToProps(state){
  return {
    accounts: state.accounts
  }
}

export default withRouter(connect(mapStateToProps, { fetchAccounts })(App));
