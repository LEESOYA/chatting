import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./chat_input_form.module.css";
class ChatInputForm extends Component {
  state = {
    value: "",
  };
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.value;
    text && this.props.onAdd(text);
    this.setState({ value: "" });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          placeholder=" Type your message..."
          className={styles.addInput}
          onChange={this.handleChange}
        ></input>
        <button type="submit" className={styles.addBtn}>
          <i className="far fa-paper-plane btn"></i>
        </button>
      </form>
    );
  }
}

export default ChatInputForm;
