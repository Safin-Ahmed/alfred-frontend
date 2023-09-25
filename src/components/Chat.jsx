import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";

const Chat = ({ chatState, setChatState }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [latestUserQuestion, setLatestUserQuestion] = useState("");
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    const fetchAnswer = async (question) => {
      const answerResponse = await fetch(
        `https://alfred-ai-1lfr.onrender.com/api/v1/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query_text: question,
          }),
        }
      );

      const answer = await answerResponse.json();

      setChatState((state) => [
        ...state,
        {
          type: "bot",
          content: answer.data,
        },
      ]);

      setIsTyping(false);

      scrollToBottom();
    };
    if (!latestUserQuestion) {
      return;
    }
    setIsTyping(true);
    fetchAnswer(latestUserQuestion);
  }, [latestUserQuestion, setChatState]);

  useEffect(() => {
    const latestChat = chatState[chatState.length - 1];

    if (latestChat.type === "bot") {
      return;
    }

    setLatestUserQuestion(latestChat.content);
    scrollToBottom();
  }, [chatState]);

  return (
    <div className={styles.chat} ref={chatContainerRef}>
      {chatState.map((item, i) => (
        <div
          className={`${
            item.type === "user" ? styles.user_chat : styles.bot_chat
          } ${styles.message}`}
          key={i}
        >
          <p>{item.content}</p>
        </div>
      ))}
      {isTyping && <div className={styles.message}>🤖Alfred AI Typing...</div>}
    </div>
  );
};

export default Chat;
