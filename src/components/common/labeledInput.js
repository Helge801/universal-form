import React ,{Component} from 'react';

class LabeledInput extends Component{


  render(){
    return(
      <div className="common-labeled-input-wrapper">
        <p className="common-labeled-input-label">
          {this.props.name}
        </p>
        <input className="common-labeled-input-input"/>
      </div>
    )
  }
}

export default LabeledInput;
