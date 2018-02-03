import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <div>
                <div><input type="text" onChange={this.props.update} ref="input"/></div>
            </div>
        )
    }
}