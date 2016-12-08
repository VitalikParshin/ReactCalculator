/**
 * Created by vitalik on 11/27/16.
 */
import React, {Component} from "react";
import {FormGroup, FormControl} from "react-bootstrap";


class Inputtext extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: ""
        }
    }

    handleShow(event) {
        // var inputText = event.target.value;
        //
        // this.setState(
        //     {val: inputText}
        // )

        this.setState({
            val: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Second application</h1>
                <FormGroup style={{margin: "23px 460px 23px 460px"}}>
                    <FormControl
                        style={{}}
                        type="text"
                        maxLength="12"
                        placeholder="Введите Ваше имя"
                        onChange={ev => this.handleShow(ev)}
                    >
                    </FormControl>
                </FormGroup>

                <h1>Привет
                    {this.state.val.length === 0 ? " stranger!": " " + this.state.val + " !!!"}
                </h1>
                <hr />
            </div>
        )
    }
}


export default Inputtext;