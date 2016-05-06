import React from 'react';
import Fields from './fields';

class CreatePoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      options: []
    };
  }

  componentDidMount() {
    this.setState({
      options: [
        ...this.state.options,
        this.createOption(),
        this.createOption(),
        this.createOption()
      ]
    });
  }

  createOption() {
    return {
      value: ''
    };
  }

  addOption() {
    this.setState({
      options: [
        ...this.state.options,
        this.createOption()
      ]
    });
  }

  handleChange(fieldName, index, event) { // gets the field name where to input value (JSON)
    var eventTarget = event.target;

    var stateObj = () => {

      var returnObj = {};
      if (fieldName === 'options') {
        returnObj[fieldName[eventTarget - 1]] = eventTarget.value;
        if (index + 1 === this.state.options.length) {
          this.addOption();
        }
      } else {
        returnObj[fieldName] = eventTarget.value;
      }
      return returnObj;
    };
    this.setState(stateObj());
    console.log(stateObj());
  }

  // var eventTarget = event.target; // synthetic event nullifies inside block
  // var stateObj = () => {
  //   var returnObj = {};
  //   if (fieldName === 'options') {
  //     returnObj[fieldName[eventTarget.id - 1]] = eventTarget.value;
  //     if (eventTarget.id === document.querySelectorAll('.optioninput').length.toString()) {
  //       // add option to list
  //     }
  //   }
  //   returnObj[fieldName] = eventTarget.value;
  //   return returnObj;
  // };
  //
  // this.setState(stateObj);

  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <div id="poll">
        <Fields fieldChange={this.handleChange.bind(this)} options={this.state.options} />
      </div>
    );
  }
}

export default CreatePoll;
