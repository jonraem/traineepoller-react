import React from 'react';

class Fields extends React.Component {
  render() {
    return (
      <form id="pollform">
        <input className="titleinput" placeholder="Title"></input>
        <input className="optioninput" placeholder="Option"></input>
        <input className="optioninput" placeholder="Option"></input>
        <input className="optioninput" placeholder="Option"></input>
      </form>
    );
  }
}

export default Fields;
