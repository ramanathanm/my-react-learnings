import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NewPropsDemoComponent extends Component {

    constructor() {
        super();

        this.state = {
            increasing: false
        }
    }
    update() {
        ReactDOM.render(
            <NewPropsDemoComponent num = {this.props.num + 1}/>,
            document.getElementById('newPropsRoot')
        )
    }

    componentWillReceiveProps(newProps) {
        console.log(`newProps: ${newProps.num}`);
        this.setState({
            increasing: newProps.num > this.props.num
        })
    }

    render() {
        console.log(`NewPropsDemoComponents render, increasing : ${this.state.increasing}`);
        return (
            <button onClick={this.update.bind(this)} >{this.props.num}</button>
        )
    }
}

NewPropsDemoComponent.defaultProps = {
    num: 0
}


export default NewPropsDemoComponent;