import { Box, Chip } from "@mui/material";
import React from "react";

const suggestions = [
  "Who is EH Safin Ahmed?",
  "Who is HM Nayem?",
  "What is the full form of EH?",
];

const Suggestions = ({ setQuery }) => {
  const handleClick = (query) => {
    setQuery(query);
  };
  return (
    <Box display="flex" flexDirection="row" gap={2} mb={2}>
      {suggestions.map((item, i) => (
        <Chip
          key={i}
          label={item}
          onClick={() => handleClick(item)}
          sx={{ color: "#fff" }}
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default Suggestions;
