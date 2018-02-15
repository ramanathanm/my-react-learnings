import React, {Component} from 'react';

class ComponentsFromArray extends Component {

    constructor() {
        super();

        this.state = {
            items:[]
        }
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then( response => response.json())
            .then( ({results: items}) => this.setState({items: items}));
    }

    render() {
        return (
            <h4>{}</h4>
        );
    }
}