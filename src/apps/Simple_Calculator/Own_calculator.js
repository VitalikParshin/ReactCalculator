/**
 * Created by vitalik on 12/2/16.
 */
import React, {Component} from "react";
import {Button, FormGroup, FormControl} from "react-bootstrap";


export default class Calcult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            one: 0,
            two: 0,
            result: ""
        }
    }

    oneDigit(el) {

        this.setState({
            one: el.target.value}

        )

    }

    twoDigit(el) {
        this.setState({
            two: el.target.value}

        )

    }

    resultAddition() {
        var result= Number(this.state.one) + Number(this.state.two);

        this.setState({
            result: result
        })

    }

    resultSubtraction() {
        var result = Number(this.state.one) - Number(this.state.two);

        this.setState({
            result: result
        })
    }

    resultMultiplication() {
        var result = Number(this.state.one) * Number(this.state.two);

        this.setState({
            result: result
        })
    }
    resultDivizion() {
        var result = Number(this.state.one) - Number(this.state.two);

        this.setState({
            result: result
        })
    }


    render() {

        return(
            <div>
                <h1>Fourth application</h1>
                <FormGroup style={{margin: "23px 590px"}}>
                    <FormControl
                        onChange={this.oneDigit.bind(this)}
                        maxLength="6"
                    >
                    </FormControl>
                    <FormControl
                        onChange={this.twoDigit.bind(this)}
                        maxLength="6"
                    >
                    </FormControl>
                </FormGroup>
                <div>{this.state.result}</div>
                <Button onClick={this.resultAddition.bind(this)}>+</Button>
                <Button onClick={this.resultSubtraction.bind(this)}>-</Button>
                <Button onClick={this.resultMultiplication.bind(this)}>*</Button>
                <Button onClick={this.resultDivizion.bind(this)}>/</Button>
            </div>
        )

    }}