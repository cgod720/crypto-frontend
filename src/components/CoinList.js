import React, { Component } from 'react'
import Coins from './Coins'
import WatchList from './WatchList'

class CoinList extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }
  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }
  render(){
    let filteredCoins = this.props.coins.filter(
      (coin) => {
        return coin.name.indexOf(this.state.search) !== -1;
    })
    return(
      <div className='body-container'>
        {this.props.currentUser ?
          <div className='right'>
            <h3 className="h3">Watch List</h3>
            <div className="scroll">
              {this.props.list.map((listing, index) => {
                return(
                  <WatchList
                    key={index}
                    arrayIndex={index}
                    currentUser={this.props.currentUser}
                    listing={listing}
                    handleDeleteWatchList={this.props.handleDeleteWatchList}
                    currentArray='list'
                    createdBy={this.props.createdBy}
                  />
                )
              })}
            </div>
          </div>
          : <div></div>
        }
        <div className='left'>
          <h3 className="h3">Top 1000 Coins by Market Cap</h3>
          <input
            type="text"
            placeholder="Search Coins"
            onChange={this.updateSearch}
            value={this.state.search}
            className="coin-search"
            />
          <div className='scroll'>
            {filteredCoins.map((coin, index) => {
              return(
                <Coins
                  key={index}
                  coin={coin}
                  arrayIndex={index}
                  addToWatchList={this.props.addToWatchList}
                  createdBy={this.props.currentUser}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default CoinList;
