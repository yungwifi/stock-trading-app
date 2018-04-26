import React, { Component } from 'react'
import NavBar from './NavBar'
import Stocks from './Stocks';

class StocksPage extends Component {
    state = {
        stock: [{
            name: "Apple Inc.",
            symbol: "AAPL",
            lastPrice: 140.64,
            change: -0.280000000000001,
            high: 141.74,
            low: 140.35,
            open: 141.5
        }]
    }
    render() {
        return (
            <div>
                <NavBar />
                This is the Stocks Page
                <Stocks stocks={this.state.stocks} />
            </div>
        )
    }
}

export default StocksPage