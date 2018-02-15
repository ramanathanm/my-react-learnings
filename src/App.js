import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextComponent from './components/TextComponent';
import Button from './components/Button';
import Heart from './components/Heart';
import Input from './components/Input';
import LifecycleDemoComponent from './components/LifecycleDemoComponent';
import NewPropsDemoComponent from './components/NewPropsDemoComponent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            s1: "This is state s1",
            s2: 0,
            a: ''
        }
    }

    update(e) {
        this.setState({s1: e.target.value});
    }

    updateText() {
        this.setState({
            //a: this.refs.a.value,
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }

    render() {
        let txt = this.props.txt;
        let cat = this.props.cat;
        let version = React.version;

        return (
            <div>
                <TextComponent update={this.update.bind(this)}/>
                <TextComponent update={this.update.bind(this)}/>
                <h1>State <b>{this.state.s1}</b>-<b>{this.state.s2}</b></h1>
                <h1>Hello <b>{txt}</b> <b>{cat}</b></h1>
                <Button>I <Heart/> React</Button>
                <p> React - {version} </p>

                <Input
                    ref={component => this.a = component}
                    update={this.updateText.bind(this)}
                /> {this.state.a}
                <input
                    ref="b"
                    type="text"
                    onChange={this.updateText.bind(this)}
                /> {this.state.b}

                <hr/>
                <b>LifeCycle Events</b>
                <LifecycleDemoComponent/>
                <hr/>
                <b>LifeCycle Events - New Props</b><br/>
                <div id="newPropsRoot">
                    <NewPropsDemoComponent/>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "This is default txt"
}
export default App;
