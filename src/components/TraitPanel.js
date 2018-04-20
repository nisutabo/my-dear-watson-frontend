import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import uuid from 'uuid'
import createHistory from "history/createBrowserHistory"

const URL = 'http://localhost:9000/api/v1/';

const Navbar = () =>
  <div>
      <NavLink to="/analyze" exact style={{color: 'cadetblue', fontSize: '100px'}}>MyDearWatson</NavLink>
  </div>;

class TraitPanel extends React.Component {
  state = {
    analysis: {}
  }

  componentDidMount() {
    fetch(URL + 'twitter_accounts' + `/${this.props.twitterId}` + `/${this.props.trait}`)
      .then(resp => resp.json())
      .then(json => this.setState({
        analysis: json
      }))
  }


  render() {
    const analysis = Object.entries(this.state.analysis)
    const result = analysis.slice(2, -2).map((metric) =>
      {
      return <tr key={uuid()}>
      <td className='td-one'>
      {
        metric[0].includes('_') ? metric[0].split('_').map(word => (word.slice(0,1).toUpperCase() + word.slice(1))).join(' ')
        :
        metric[0].slice(0,1).toUpperCase() + metric[0].slice(1)
      }
      </td>
      <td className='td-two'>
      {
        metric[1]
      }
      </td>
      </tr>
      })
    return (
      <div className='container'>
        <Navbar />
        <h1>
        {this.props.twitterHandle}
        </h1>
        <table width="50%"  cellPadding="10">
        {result}
        </table>

      </div>
    )
  }
}

export default TraitPanel;


// <NavLink to="/personality" exact activeStyle={{background: 'darkblue'}}>Personality</NavLink>
// <NavLink to="/need" exact activeStyle={{background: 'darkblue'}}>Values</NavLink>
// <NavLink to="/value" exact activeStyle={{background: 'darkblue'}}>Needs</NavLink>
// <NavLink to="/consumption_preference" exact activeStyle={{background: 'darkblue'}}>Consumption Preferences</NavLink>
