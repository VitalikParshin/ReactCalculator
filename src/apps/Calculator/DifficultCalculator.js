/**
 * Created by vitalik on 12/4/16.
 */

import React, {Component} from "react";
import {Button, FormGroup, FormControl} from "react-bootstrap";
import './calstyle.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class DifCalc extends Component {
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

        this.setState({
            val: eval(a)
        })

        // var allSplit = a.split("");
        //
        // var operandArray = allSplit.filter(function (el) {
        //     return isNaN(el);
        // })
        // var operand = operandArray.join()
        //
        // var b = a.split(operandArray.join());
        // var first = Number(b[0]);
        // var second = Number(b[1]);
        //
        // if (operand === "+") {
        //     this.setState({
        //         val: first + second
        //
        //     })
        // } else if (operand === "-") {
        //     this.setState({
        //         val: first - second
        //     })
        // } else if (operand === "*") {
        //     this.setState({
        //         val: first * second
        //     })
        // } else {
        //     this.setState({
        //         val: first / second
        //     })
        // }
    }

    render() {
        return(
            <div className="main-block">
                <FormGroup>
                    <FormControl className="display-block"
                       maxLength="2"
                       value={this.state.val}
                    >

                    </FormControl>
                </FormGroup>
                <div className="buttons-block">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <Button
                                    className="button-ce"
                                    bsSize="large"
                                    onClick={this.clearFild.bind(this)}
                                >
                                    C
                                </Button>
                            </td>
                            <td>
                                <Button
                                    className="button-ce"
                                    bsSize="large"
                                    onClick={this.clearFild.bind(this)}
                                >
                                    &plusmn;
                                </Button>
                            </td>
                            <td>
                                <Button
                                    className="button-ce"
                                    bsSize="large"
                                    onClick={this.clearFild.bind(this)}
                                >
                                    &#37;
                                </Button>
                            </td>
                            <td>
                                <Button
                                    className="button-division"
                                    bsSize="large"
                                    bsStyle="warning"
                                    value="/"
                                    onClick={this.buttonValue.bind(this)}
                                >
                                    &divide;
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button
                                    className="button-seven"
                                    bsSize="large"
                                    id="7"
                                    value="7"
                                    onClick={this.buttonValue.bind(this)}>7</Button>

                            </td>
                            <td>
                                <Button
                                    className="button-eight"
                                    bsSize="large"
                                    id="8"
                                    value="8"
                                    onClick={this.buttonValue.bind(this)}>8</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-nine"
                                    bsSize="large"
                                    id="9"
                                    value="9"
                                    onClick={this.buttonValue.bind(this)}>9</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-multipl"
                                    bsSize="large"
                                    bsStyle="warning"
                                    value="*"
                                    onClick={this.buttonValue.bind(this)}>&times;</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button
                                    className="button-four"
                                    bsSize="large"
                                    id="4"
                                    value="4"
                                    onClick={this.buttonValue.bind(this)}>4</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-five"
                                    bsSize="large"
                                    id="5"
                                    value="5"
                                    onClick={this.buttonValue.bind(this)}>5</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-six"
                                    bsSize="large"
                                    id="6"
                                    value="6"
                                    onClick={this.buttonValue.bind(this)}>6</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-substract"
                                    bsSize="large"
                                    bsStyle="warning"
                                    value="-"
                                    onClick={this.buttonValue.bind(this)}>&#8722;</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button
                                    className="button-one"
                                    bsSize="large"
                                    value="1"
                                    onClick={this.buttonValue.bind(this)}>1
                                </Button>
                            </td>
                            <td>
                                <Button
                                    className="button-two"
                                    bsSize="large"
                                    id="2"
                                    value="2"
                                    onClick={this.buttonValue.bind(this)}>2</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-three"
                                    bsSize="large"
                                    id="3"
                                    value="3"
                                    onClick={this.buttonValue.bind(this)}>3</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-addition"
                                    bsSize="large"
                                    bsStyle="warning"
                                    value="+"
                                    onClick={this.buttonValue.bind(this)}>+</Button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Button
                                    className="button-zero"
                                    bsSize="large"
                                    id="0"
                                    value="0"
                                    onClick={this.buttonValue.bind(this)}>0</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-dot"
                                    bsSize="large"
                                    value="."
                                    onClick={this.buttonValue.bind(this)}>.</Button>
                            </td>
                            <td>
                                <Button
                                    className="button-equal"
                                    bsSize="large"
                                    bsStyle="warning"
                                    value="="
                                    onClick={this.result.bind(this)}>=</Button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
//
// const Calculator = () => (
//     <MuiThemeProvider>
//         <DifCalc />
//     </MuiThemeProvider>
// )

export default DifCalc;