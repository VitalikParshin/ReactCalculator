/**
 * Created by vitalik on 11/27/16.
 */

import React from "react";
import {Image} from "react-bootstrap";
var CONTACTS = [

    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://www.goliath.com/wp-content/uploads/2015/12/darth-vader.jpg'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images.halloweencostumes.com/products/8972/1-1/deluxe-princess-leia-wig.jpg'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'http://www.sideshowtoy.com/photo.php?sku=902436'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://static.esea.net/global/images/users/1055418.1443369346.png'
    }
];


var Contact = React.createClass({

    render: function () {
        return (
            <li className="contact">
                <Image
                    className="contact-image"
                    src={this.props.image}
                    width="80px"
                    height="80px"
                    role="presentation"
                    rounded
                />
                <div className="contact-info">
                    <div className="contact-name">{this.props.name}</div>
                    <div className="contact-number">{this.props.phoneNumber}</div>
                </div>
            </li>
        );
    }
})

var ContactList = React.createClass({
    getInitialState: function () {
        return {
            displayedContacts: CONTACTS
        }
    },

    handlSearch: function (event) {
        var searchQuery = event.target.value.toLowerCase();

        var displayedContacts = CONTACTS.filter(function (el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1
        })

        this.setState({
            displayedContacts: displayedContacts
        })
    },

    render: function () {
        return (
            <div className="contacts">
                <h1>First application</h1>
                <input type="text" className="search-field" onChange={this.handlSearch} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
})

module.exports = ContactList;