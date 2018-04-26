import React, { Component } from 'react'
import NavBar from './NavBar'
import stocks from '../data/stock-data'

class Stocks extends Component {

    render() {
        const stocks = this.props.stock.map((stock, i) => {
            return <StocksPage
                key={i}
                name={stock.name}
                symbol={stock.symbol}
                lastPrice={stock.lastPrice}
                change={stock.change}
                high={stock.high}
                low={stock.low}
                open={stock.open} />
        })
        return (
            <div>
                <NavBar />
                This is the Stocks Page
                {stocks}
            </div>
        )
    }
}

export default Stocks