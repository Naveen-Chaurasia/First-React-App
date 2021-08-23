import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic"><u><b>Products in Stock</b></u></h1>
            <Widecard Name="Rice container" Price="1200" Discount="10%" Quality="5 quintal"/>
            <Widecard Name="Wardrobe" Price="4000" Discount="20%" Quality="Teen"/>
            <Widecard Name="Steel Box bed" Price="5000" Discount="15%" Quality="10 quintal"/>
            </div>
            )
        }
    }
    
export default Education
    