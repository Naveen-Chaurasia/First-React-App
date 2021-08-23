import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3>{this.props.Name}</h3>
            <h4 class="secondtext">{this.props.Quality}</h4>
            <h4 class="secondtext">Price:{this.props.Price}</h4>
            <h4 class="secondtext">Discount:{this.props.Discount}</h4>

            </div>
            </div>
            )
        }
    }
    
export default Widecard
    