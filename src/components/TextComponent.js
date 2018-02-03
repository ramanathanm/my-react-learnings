import React, {Component} from 'react';

class TextComponent extends Component {
   render() {
       return (
           <div>
               <input type="text" onChange={this.props.update}/>
           </div>
       )
   }
}

export default TextComponent;