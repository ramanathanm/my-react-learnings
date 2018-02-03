import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LifecycleDemoComponent extends Component {
    mount() {
        ReactDOM.render(
            <Button/>,
            document.getElementById('placeholder')
        );
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('placeholder'));
    }

    render() {
        return (<div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unmount.bind(this)}>UnMount</button>
            <hr/>
            <div id="placeholder"></div>
            <hr/>
        </div>);
    }
}

class Button extends Component {
    constructor() {
        super();

        this.state = {
            num: 0
        }

        this.updateNum = this.updateNum.bind(this);
    }

    updateNum() {
        this.setState({
            num: this.state.num + 1
        })
    }

    componentWillMount() {
        console.log("Buttons componentWillMount");
    }

    render() {
        console.log("Button's render");
        return (
            <button onClick={this.updateNum}>{this.state.num}</button>
        );
    }

    componentWillUnmount() {
        console.log("Button's componentWillUnmount");
    }
}
export default LifecycleDemoComponent;