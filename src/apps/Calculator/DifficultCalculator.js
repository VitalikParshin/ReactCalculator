/**
 * Created by vitalik on 12/4/16.
 */

import React, {Component} from "react";
import {Button} from "react-bootstrap";


export default class DifCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: "",
            res: ""
        }
    }

    buttonValue(el){
        var element = el.target.value;

        var listelements = this.state.val.concat(element);

        this.setState({
            val: listelements
        })
    }

    clearFild() {
        this.state = {
            val: ""
        }

        this.setState({
            val: this.state.val
        })

    }
    result(){
        var a = this.state.val;

        var allSplit = a.split("");

        var operandArray = allSplit.filter(function (el) {
            return isNaN(el);
        })
        var operand = operandArray.join()

        var b = a.split(operandArray.join());
        var first = Number(b[0]);
        var second = Number(b[1]);

        if (operand === "+") {
            this.setState({
                val: first + second

            })
        } else if (operand === "-") {
            this.setState({
                val: first - second
            })
        } else if (operand === "*") {
            this.setState({
                val: first * second
            })
        } else {
            this.setState({
                val: first / second
            })
        }
    }

    render() {
        return(
            <div>
                <div style={{border: '1px solid black', width: '12%', height: '30px'}}>
                    {this.state.val}
                </div>

                <table>
                    <tr>
                        <td>
                            <Button
                                id="1"
                                value="1"
                                onClick={this.buttonValue.bind(this)}>1</Button>
                        </td>
                        <td>
                            <Button
                                id="2"
                                value="2"
                                onClick={this.buttonValue.bind(this)}>2</Button>
                        </td>
                        <td>
                            <Button
                                id="3"
                                value="3"
                                onClick={this.buttonValue.bind(this)}>3</Button>
                        </td>
                        <td>
                            <Button

                                value="+"
                                onClick={this.buttonValue.bind(this)}>+</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                                id="4"
                                value="4"
                                onClick={this.buttonValue.bind(this)}>4</Button>
                        </td>
                        <td>
                            <Button
                                id="5"
                                value="5"
                                onClick={this.buttonValue.bind(this)}>5</Button>
                        </td>
                        <td>
                            <Button
                                id="6"
                                value="6"
                                onClick={this.buttonValue.bind(this)}>6</Button>
                        </td>
                        <td>
                            <Button

                                value="-"
                                onClick={this.buttonValue.bind(this)}>-</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                                id="7"
                                value="7"
                                onClick={this.buttonValue.bind(this)}>7</Button>

                         </td>
                        <td>
                            <Button
                                id="8"
                                value="8"
                                onClick={this.buttonValue.bind(this)}>8</Button>
                        </td>
                        <td>
                            <Button
                                id="9"
                                value="9"
                                onClick={this.buttonValue.bind(this)}>9</Button>
                        </td>
                        <td>
                            <Button

                                value="*"
                                onClick={this.buttonValue.bind(this)}>*</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                                id="0"
                                value="0"
                                onClick={this.buttonValue.bind(this)}>0</Button>
                        </td>
                        <td colSpan="2">
                            <Button
                                value="="
                                style={{width: "72px"}}
                                onClick={this.result.bind(this)}>=</Button>

                        </td>
                        <td>
                            <Button
                                value="/"
                                onClick={this.buttonValue.bind(this)}>/</Button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <Button
                                style={{width: '140px'}}
                                onClick={this.clearFild.bind(this)}
                            >
                                CE
                            </Button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}