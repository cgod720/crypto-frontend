import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateUser(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSignUpSubmit}>
          <input
            type="text"
            placeholder="New User"
            onChange={this.handleUserNameChange}
            value={this.state.username}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
          <br/>
          <button type="submit" className="but"><i className="fas fa-user-plus"></i></button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
