import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radar } from 'react-chartjs-2';
import { Container, List } from 'semantic-ui-react';
import { Icon } from '@blueprintjs/core';
import "./RadarChart.css"



class RadarChart extends Component {

  state = {
    trait: 'personality'
  }

  traitPersonality = () => {
    this.setState({
      trait: 'personality'
    })
  }

  traitNeeds = () => {
    this.setState({
      trait: 'needs'
    })
  }

  traitValues = () => {
    this.setState({
      trait: 'values'
    })
  }

  traitConsumptionPreferences = () => {
    this.setState({
      trait: 'consumption_preferences'
    })
  }

    names = () => {
      if (Object.keys(this.props.account1).length < 6 || Object.keys(this.props.account2).length < 6){
        return ['Account 1', 'Account 2']
      }
      else {
        return [this.props.account1.account.handle, this.props.account2.account.handle]
      }
    }

    values = () => {
      if (Object.keys(this.props.account1).length < 6 || Object.keys(this.props.account2).length < 6){
        return [[],[],[]]
      }
      else {

          return [
            Object.keys(this.props.account1[`${this.state.trait}`]).slice(2, -2).map(l => l.includes('_') ?
          l.replace(/_/gi, ' ')
          : l ),
            Object.values(this.props.account1[`${this.state.trait}`]).slice(2, -2),
            Object.values(this.props.account2[`${this.state.trait}`]).slice(2, -2)
          ]

      }
    }

  render(){
    const radarValues = {
      labels: this.values()[0],
      datasets:
      [
        {
          label: this.names()[0],
          borderColor: 'rgba(126, 19, 195, 0.32)',
          backgroundColor: 'rgba(126, 19, 195, 0.32)',
          borderWidth: 0.7,
          pointBackgroundColor: 'rgba(126, 19, 195, 0.32)',
          pointBorderColor: 'rgba(126, 19, 195, 0.32)',
          pointBorderWidth: 1,
          pointHoverBackgroundColor: 'rgba(126, 19, 195, 0.32)',
          pointHoverBorderColor: 'rgba(126, 19, 195, 0.32)',
          data: this.values()[1]
        },
        {
          label: this.names()[1],
          borderColor: 'rgba(38, 154, 88, 0.5)',
          backgroundColor: 'rgba(38, 154, 88, 0.5)',
          borderWidth: 0.7,
          pointBackgroundColor: 'rgba(38, 154, 88, 0.5)',
          pointBorderColor: 'rgba(38, 154, 88, 0.5)',
          pointBorderWidth: 1,
          pointHoverBackgroundColor: 'rgba(38, 154, 88, 0.5)',
          pointHoverBorderColor: 'rgba(38, 154, 88, 0.5)',
          data: this.values()[2]
        }
      ]
    }
    const optionValues = {
        title: {
          display: true,
          text: `Comparative Analysis - ${this.state.trait.charAt(0).toUpperCase() + this.state.trait.slice(1)}`,
          fontFamily: 'Helvetica',
          fontSize: 15,
          fontStyle: 'bold'
        },
        scale: {
          display: true,
          gridLines: {
            display: false
          },
          ticks: {
            fontSize: 6,
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100
          },
          pointLabels: {
            fontSize: 8
          }
        },
        layout: {
          padding: {
            top: 10,
            left: 0
          }
        },
        legend: {
          display: true,
          labels: {
            fontSize: 10,
            boxWidth: 10
          },
          position: 'bottom'
        },
        responsive: false
      }

    return(

        <Container textAlign='center' className='chart'>
            <List horizontal selection>
              <List.Item>
              </List.Item>
              <List.Item>
              </List.Item>
              <List.Item>
              </List.Item>
              <List.Item>
              </List.Item>
              <List.Item>
              </List.Item>
              <List.Item>
              </List.Item>
              <List.Item>
              </List.Item>
              <List.Item onClick={this.traitPersonality}>
                <Icon iconSize={15} icon='person' color='black'/>


              </List.Item>
              <List.Item onClick={this.traitNeeds}>
                <Icon iconSize={15} icon='heart' color='black'/>

              </List.Item>
              <List.Item onClick={this.traitValues}>
                <Icon iconSize={15} icon='key' color='black'/>

              </List.Item>
            </List>
            <Radar data={radarValues} height={500} width={500} options={optionValues}/>
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account1: state.account1,
    account2: state.account2
   }
}

export default connect(mapStateToProps) (RadarChart)
