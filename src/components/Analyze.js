import React from 'react'
import uuid from 'uuid'
//import Analysis from './components/Analysis'
const URL = 'http://localhost:9000/api/v1/'
class Analyze extends React.Component {

  state = {
    analysis: {}
  }



  fetchAnalysis = () => {
    fetch(URL + 'twitter_accounts' + `/${this.props.currentAccount}` + `/${this.props.currentAttribute}`)
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
