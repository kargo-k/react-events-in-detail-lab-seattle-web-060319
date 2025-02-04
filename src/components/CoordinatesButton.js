// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    getCoordinates = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.getCoordinates}>Click Me</button>
        )
    }
}