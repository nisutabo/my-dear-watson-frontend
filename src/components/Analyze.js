import React from 'react'
import uuid from 'uuid'
//import Analysis from './components/Analysis'
const URL = 'http://localhost:9000/api/v1/'
class Analyze extends React.Component {

  state = {
    analysis: {}
  }



  fetchAnalysis = () => {
    console.log(this.props.currentAccount);
    fetch(URL + 'twitter_accounts' + `/${this.props.currentAccount}` + `/${this.props.currentTrait}`)
    .then(resp => resp.json())
    .then(json => this.setState({
      analysis: json
    }))
  }



  render(){
    console.log(this.state.analysis)
    const analysis = Object.entries(this.state.analysis)
    console.log(analysis)
    const result = analysis.map((metric) => {
      return <h3 key={uuid()}>{metric[0]}: {metric[1]}</h3>
    })
    console.log(result)
    return (
      <div>
        <h1>{this.props.currentAttribute}</h1>
        <button onClick={this.fetchAnalysis}>analyze</button>
        {result}
      </div>
    )
  }
}

export default Analyze
