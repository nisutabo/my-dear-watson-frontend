import React from 'react';

class Analyze extends React.Component {
  state = {
    handle: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.setCurrentHandle(this.state.handle)
  }

  handleChange = event => {
    this.setState({
      handle: event.target.value
    })
  }

  render() {
    //console.log(this.state.handle)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" list="twitter_handles"  onChange={this.handleChange} />
            <datalist id="twitter_handles" >
              {this.props.accounts.map(account =>
                <option key={account.id}  id={account.id}>{account.id}-{account.handle}</option>
              )}
            </datalist>
          <input type="submit" value="Go" />
        </form>
      </div>
    )
  }
}

export default Analyze;
