import React from 'react';
import Fields from './fields';

class CreatePoll extends React.Component {
  render() {
    return (
    <div id="poll">
      <Fields />
      <button id="createbutton">Create Poll</button>
    </div>
    );
  }
}

export default CreatePoll;
