import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import "./Home.module.css";
import { Container } from "@mui/material";
import BottomInput from "../components/BottomInput";
import Chat from "../components/Chat";

const Home = () => {
  const [isFirstQuestionAsked, setIsFirstQuestionAsked] = useState(false);
  const [chatState, setChatState] = useState([]);

  console.log({ chatState });

  return (
    <Container
      sx={{
        height: "100vh",
        paddingBottom: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "60% !important",
      }}
    >
      {!isFirstQuestionAsked && <Banner />}

      {isFirstQuestionAsked && (
        <Chat chatState={chatState} setChatState={setChatState} />
      )}
      <BottomInput
        setIsFirstQuestionAsked={setIsFirstQuestionAsked}
        setChatState={setChatState}
      />
    </Container>
  );
};

export default Home;
