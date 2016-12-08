/**
 * Created by vitalik on 11/27/16.
 */

import React, {Component} from "react";
import {Image, FormControl } from "react-bootstrap";


var CONTACTS = [

    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://www.goliath.com/wp-content/uploads/2015/12/darth-vader.jpg',
        email: "dart@gmail.com"
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images.halloweencostumes.com/products/8972/1-1/deluxe-princess-leia-wig.jpg',
        email: "leila@gmail.com"
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'http://www.sideshowtoy.com/photo.php?sku=902436',
        email: "luke@gmail.com"
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://static.esea.net/global/images/users/1055418.1443369346.png',
        email: "chewbacca@gmail.com"
    }
];

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
    }

    isOpen() {

        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <li className="contact">
                <Image
                    className="contact-image"
                    src={this.props.image}
                    width="40px"
                    height="40px"
                    circle
                    onClick={this.isOpen.bind(this)}
                />

                <div className="contacts-info" >
                    <div className="contact-name">
                        {this.props.name}
                    </div>
                    <div className="contact-number">
                        {this.props.phoneNumber}
                    </div>
                    <div>{this.state.showModal ? this.props.email : null}</div>
                </div>


            </li>
        )
    }
}

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayedContacts: CONTACTS
        };
    }

    handlSearch(event) {
        var searchQuery = event.target.value.toLowerCase();

        var displayedContacts = CONTACTS.filter( element => {
                var names = element.name.toLowerCase();
                return names.indexOf(searchQuery) !== -1
        })

        this.setState({
            displayedContacts: displayedContacts
        })
    }

    render() {
        return (
            <div className="contacts">
                <h1>First Application</h1>
                <FormControl
                    className="search-field"
                    type="text" onChange={this.handlSearch.bind(this)}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map( el =>
                            <Contacts
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                email={el.email}

                            />

                        )
                    }
                </ul>
            </div>
        )
    }
}


export default ContactList;
