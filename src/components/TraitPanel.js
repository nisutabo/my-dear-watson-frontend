import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import uuid from 'uuid'

const URL = 'http://localhost:9000/api/v1/';

const Navbar = () =>
  <div>
    <NavLink to="/personality" exact activeStyle={{background: 'darkblue'}}>Personality</NavLink>
    <NavLink to="/need" exact activeStyle={{background: 'darkblue'}}>Values</NavLink>
    <NavLink to="/value" exact activeStyle={{background: 'darkblue'}}>Needs</NavLink>
    <NavLink to="/consumption_preference" exact activeStyle={{background: 'darkblue'}}>Consumption Preferences</NavLink>
  </div>;

class TraitPanel extends React.Component {
  state = {
    analysis: {}
  }

  componentDidMount() {
    fetch(URL + 'twitter_accounts' + `/${this.props.twitterId}` + `/${this.props.trait}`)
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  render() {
    // const analysis = Object.entries(this.state.analysis)
    // const result = analysis.map((metric) => {
    //   return <h3 key={uuid()}>{metric[0]}: {metric[1]}</h3>
    // })



    return (
      <div>
        <Navbar />

      </div>
    )
  }
}

export default TraitPanel;
