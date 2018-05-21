import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image } from 'semantic-ui-react';


class ImageHolder extends Component {

  renderImage1 = () => {
    if (Object.keys(this.props.account1) < 6){
      return null
    } else {
      return <Image src={`https://${this.props.account1.avatar.host}${this.props.account1.avatar.path}`} wrapped />
    }
  }

  renderImage2 = () => {
    if (Object.keys(this.props.account2) < 6){
      return null
    } else {
      return <Image src={`https://${this.props.account2.avatar.host}${this.props.account2.avatar.path}`} wrapped />
    }
  }

  render(){
    return (
      <Container textAlign='justified'>
        <Image.Group >
          {this.renderImage1()}
          {this.renderImage2()}
        </Image.Group>
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



export default connect(mapStateToProps) (ImageHolder)
