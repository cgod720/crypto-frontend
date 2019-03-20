import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="header">
        <h1 className='headline' onClick={() => {this.props.handleView('none')}}>CRYPTO<i className="fas fa-globe" id="spin"></i>SPHERE</h1>
        {this.props.currentUser ?
          <span>
            <span className="welcome">Welcome, {this.props.currentUser}!</span>
            <br/>
            <button className='signLogButtons' onClick={() => {this.props.handleDeleteSession(this.props.currentUser)}}>Log Out</button>
          </span> :
          <span></span>
        }
        {!this.props.currentUser ?
          <div>
            <button className='signLogButtons' onClick={() => {this.props.handleView('login')}}>Log In</button>
            <button className='signLogButtons' onClick={() => {this.props.handleView('signup')}}>Sign Up</button>
          </div> :
          <span></span>
        }
      </div>
    )
  }
}

export default Header;
