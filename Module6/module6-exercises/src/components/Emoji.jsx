import React, { useState } from "react";
import { Button } from "@mui/material";

const Emoji = () => {
  // Step 2: useState to manage the current emoji (😊 by default)
  const [emoji, setEmoji] = useState("😊");

  // Step 3: Toggle between happy and sad emojis when the button is clicked
  const changeMood = () => {
    setEmoji((prevEmoji) => (prevEmoji === "😊" ? "😢" : "😊"));
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Step 4: Display the current emoji */}
      <h1>{emoji}</h1>
      {/* Step 5: Add the button to change the emoji */}
      <Button variant="contained" color="primary" onClick={changeMood}>
        Change Mood
      </Button>
    </div>
  );
};

export default Emoji;
