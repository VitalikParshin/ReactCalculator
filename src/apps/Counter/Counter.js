/**
 * Created by vitalik on 11/27/16.
 */
import React, { Component } from "react";
import { Button } from "react-bootstrap";


class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0,
            // subtraction: 0
        }
    }

    addOne() {

        this.setState(
            {value: this.state.value + 1}
        )

    }

    subtractOne() {

        this.setState(
            {value: this.state.value - 1}
        )
    }

    render() {
        return (
            <div>
                <h1>Third application</h1>
                <Button
                    style={{margin: "0px 25px 10px 0px"}}
                    bsStyle="primary"
                    onClick={this.addOne.bind(this) }> +
                </Button>
                <br/>
                <a style={{ padding: "2rem" }}>{this.state.value}</a>
                <br />
                <Button
                    style={{margin: "0px 25px 10px 0px"}}
                    bsStyle="danger"
                    onClick={value => this.subtractOne(value)}> -
                </Button>
            </div>
        )
    }
}

export default Counter;