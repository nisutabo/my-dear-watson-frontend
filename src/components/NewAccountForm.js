import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { addAccount } from '../actions';
import { clearErrors } from '../actions';
import {green500, purple500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import "./NewAccountForm.css"


const styles = {
  customWidth: {
    width: 100,
  },
  underlineStyle: {
    borderColor: green500,
  },
  floatingLabelStyle: {
    color: green500,
  },
  floatingLabelFocusStyle: {
    color: purple500,
  },
  hintStyle: {
    fontSize: 15
  }
};

const alertStyles = {
  customWidth: {
    width: 400,
  },
  titleFont: {
    fontFamily: 'Arial',
  }
}

class NewAccountForm extends Component {


  state = {
    newHandle: '',
    isAlertOpen: false,

  }

  handleAlertClose = () => {
    this.setState({
      isAlertOpen: false
    })
  }

  handleAlertOpen = () => {
    this.setState({
      isAlertOpen: true
    })
  }

  handleAccountAdd = () => {
    if (this.state.newHandle){
      return this.props.addAccount(this.state.newHandle)
    } else {
      return null
    }
  }

  componentDidMount = () => {
    if (this.props.errors.length >= 1){
      this.handleAlertOpen()
    }
  }


  handleChange = (event, value) => {
    this.setState({newHandle: value})
    this.props.clearErrors()
  }

  render(){
    console.log(this.props.errors)
        const actions = [
          <button type="button" onClick={this.handleAlertClose} className="pt-button pt-intent-warning-success pt-standard">

          <span className="pt-icon-standard pt-icon-undo pt-align-center"></span>
          </button>,
        ]

    return(
      <Container>
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.isAlertOpen}
              onRequestClose={this.handleAlertClose}
              titleStyle={alertStyles.titleFont}
              title='Invalid Twitter Handle'
              contentStyle={alertStyles.customWidth}
              >
              Please check that this Twitter account exists.
            </Dialog>

            <TextField
              hintText='e.g. kanyewest'
              hintStyle={styles.hintStyle}
              floatingLabelText="Add A New Twitter Account:"
              styles={styles.customWidth}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              floatingLabelFixed={true}
              underlineFocusStyle={styles.underlineStyle}
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <button type="submit" onClick={this.handleAccountAdd} className="pt-button pt-intent-success ">

            <span className="pt-icon-standard pt-icon-import pt-align-center"></span>
            </button>


      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors
   }
}



export default connect(mapStateToProps, { addAccount, clearErrors } ) (NewAccountForm)
