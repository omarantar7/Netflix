import { useState } from "react";

const PassToggle = () => {
  const [showField, setShowField] = useState(false);

  const toggle = (
    <h4
      onClick={() => {
        setShowField((visible) => !visible);
      }}
    >
      {showField ? "HIDE" : "SHOW"}
    </h4>
  );
  const inputType = showField ? "text" : "password";

  return {toggle, inputType};
};

export default PassToggle;
