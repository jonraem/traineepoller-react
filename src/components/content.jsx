import React from 'react';
import CreatePoll from './createpoll';

class Content extends React.Component {
  render() {
    return (
    <div id="content">
      <h1>TraineePoller</h1>
      <CreatePoll />
    </div>
    );
  }
}

export default Content;
