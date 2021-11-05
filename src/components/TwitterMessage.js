import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  handleClick = (e) => {
    if (e.target.value.length <= this.props.maxChars) {
      this.setState({message: e.target.value})
    } else {
      alert("Character limit")
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={this.handleClick}
        value={this.state.message}
        />
        <em>Characters left: {this.props.maxChars - this.state.message.length}</em>
      </div>
    );
  }
}

export default TwitterMessage;
