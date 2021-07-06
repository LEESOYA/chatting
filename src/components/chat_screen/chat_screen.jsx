import React, { Component } from "react";
import ChatInputForm from "../chat_input_form/chat_input_form";
import styles from "./chat_screen.module.css";

class ChatScreen extends Component {
  state = {
    myChatLog: [
      { id: 1, date: Date.now(), msg: "hello~" },
      { id: 2, date: Date.now(), msg: "chatting start~" },
      { id: 3, date: Date.now(), msg: "날씨가 더워요" },
    ],
  };

  hanldleAdd = text => {
    const index = this.state.myChatLog.length;
    this.setState({
      myChatLog: [
        ...this.state.myChatLog,
        {
          id: index + 1,
          date: Date.now(),
          msg: text,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <section className={styles.chatContainer}>
          <section className={styles.chatScreen}>
            {this.state.myChatLog.map(data => (
              <div key={data.id} className={styles.chatList}>
                <span className={styles.msg}>{data.msg}</span>
              </div>
            ))}
          </section>
          <ChatInputForm
            chatDatas={this.state.myChatLog}
            onAdd={this.hanldleAdd}
          />
        </section>
      </>
    );
  }
}

export default ChatScreen;
