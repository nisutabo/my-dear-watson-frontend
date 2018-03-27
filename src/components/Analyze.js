import React from 'react'
//import Analysis from './components/Analysis'
const URL = 'http://localhost:9000/api/v1/'
const Analyze = ({ currentAccount, currentAttribute }) => {


  const fetchAnalysis = () => {
    fetch(URL + 'twitter_accounts' + `/${currentAccount}` + `/${currentAttribute}`)
    .then(resp => resp.json())
    .then(json => console.log(json))
  }



    console.log(currentAttribute)
    return (
      <div>
        <h1>{currentAttribute}</h1>
        <button onClick={fetchAnalysis}>analyze</button>
      </div>
    )

}

export default Analyze
