import React, { Component } from 'react';
import { Container, Grid  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import { fetchAccount1 } from '../actions';
import { fetchAccount2 } from '../actions';
import MenuItem from 'material-ui/MenuItem';
import RadarChart from '../components/RadarChart';
import NewAccountForm from '../components/NewAccountForm';
import ImageHolder from '../components/ImageHolder';
import MiniLoader from '../components/MiniLoader';



class Home extends Component {
  state = {
    account1: 1,
    account2: 2
  }

  handleChange1 = (event, index, value) => this.setState({account1: value})

  handleChange2 = (event, index, value) => this.setState({account2: value})

  handleAnalysis = () => {
      this.props.fetchAccount1(this.state.account1)
      this.props.fetchAccount2(this.state.account2)
  }

  accountOneOptions = () => {
    return this.props.accounts.filter(account => account.id !== this.state.account2).sort((a,b) => a.handle.localeCompare(b.handle)).map(account => {
      return <MenuItem key={account.id} value={account.id} primaryText={account.handle} />
    })
  }

  accountTwoOptions = () => {
    return this.props.accounts.filter(account => account.id !== this.state.account1).sort((a,b) => a.handle.localeCompare(b.handle)).map(account => {
      return <MenuItem key={account.id} value={account.id} primaryText={account.handle} />
    })
  }

  render(){
    return (
      <Container>
      {this.props.loading || this.props.fetched ? <Container> <MiniLoader /> </Container>
      :
      <Grid columns={2} divided padded='horizontally'>

          <Grid.Row padded='horizontally'>
            <Grid.Column width={5}>
              <NewAccountForm />
              <br></br>
              <SelectField
                floatingLabelText='Account 1:'
                value={this.state.account1}
                onChange={this.handleChange1}
                >
                {this.accountOneOptions()}
              </SelectField>
              <br></br>
              <SelectField
                floatingLabelText='Account 2:'
                value={this.state.account2}
                onChange={this.handleChange2}
                >
                {this.accountTwoOptions()}
              </SelectField>
              <br></br>
              <br></br>
              <button type="button" onClick={this.handleAnalysis} className="pt-button pt-intent-success pt-standard">

              <span className="pt-icon-standard pt-icon-arrow-right pt-align-center"></span>
              </button>
              <br></br>
              <br></br>
              <br></br>
              <ImageHolder />
            </Grid.Column>
            <Grid.Column>
              <RadarChart />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      }
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    account1: state.account1,
    loading: state.loading,
    fetched: !Object.keys(state.accounts).length
  }
}

export default connect(mapStateToProps, { fetchAccount1, fetchAccount2 })(Home)
