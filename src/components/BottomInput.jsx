import { Box, IconButton, InputAdornment, InputBase } from "@mui/material";
import React, { useState } from "react";
import "./BottomInput.module.css";
import Suggestions from "./Suggestions";
import SendIcon from "@mui/icons-material/Send";

const BottomInput = ({ setIsFirstQuestionAsked, setChatState }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSend = (e) => {
    setIsFirstQuestionAsked(true);
    setChatState((state) => [
      ...state,
      {
        type: "user",
        content: query,
      },
    ]);

    setQuery("");
  };
  return (
    <Box>
      <Suggestions setQuery={setQuery} />
      <InputBase
        fullWidth
        id="filled-hidden-label-normal"
        variant="filled"
        placeholder="Ask any question"
        value={query}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleSend}
              aria-label="toggle password visibility"
              edge="end"
              sx={{ color: "#000" }}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
        sx={{
          borderRadius: "15px",
          padding: 1.25,
          paddingX: 2,
          background: "#fff",
        }}
      />
    </Box>
  );
};

export default BottomInput;
