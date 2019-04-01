import React, {Component} from 'react';
import LabeledInput from './common/labeledInput.js';

class InputList extends Component{
  render(){
    const {inputs} = this.props;
    if(inputs)
      return inputs.map(i => {
        return <LabeledInput name={i}/>
      });
    return null;
  }
}

export default InputList;
