import React, { Component } from 'react'

class LogInForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleLogPassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleLogSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateSession(this.state)
    this.clearLogForm()
  }
  clearLogForm = () => {
    this.setState({
      username: '',
      password: ''
    })
  }
  render(){
    return(
      <div className="form">
        {!this.props.currentUser ?
          <form onSubmit={this.handleLogSubmit}>
            <input
              type='text'
              placeholder='User Name'
              onChange={this.handleLogUserChange}
              value={this.state.username}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={this.handleLogPassChange}
              value={this.state.password}
            />
            <br/>
            <button type="submit" className="but"><i className="fas fa-sign-in-alt"></i></button>
          </form>
           : <div>{this.props.handleView('none')}</div>
        }
      </div>
    )
  }
}


export default LogInForm;
