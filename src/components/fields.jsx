import React from 'react';

class Fields extends React.Component {
  createPoll() {

  }

  render() {
    return (
      <form id="pollform" action="http://localhost:1337/poll" method="post" encType="application/json">
      <input name="title" className="titleinput" placeholder="Write poll title here..." onChange={this.props.fieldChange.bind(this, 'title')}></input>
        <div id="optionfields">
          {this.props.options.map((option, index) => {
            return <input name="options"
                          key={index}
                          className="optioninput"
                          placeholder="Option"
                          onChange={this.props.fieldChange.bind(this, 'options', index)}></input>
          })}
        </div>
        <input id="createbutton" type="submit" value="Create poll"></input>
      </form>
    );
  }
}

export default Fields;
