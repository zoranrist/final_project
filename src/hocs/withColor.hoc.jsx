import React, { useState } from "react";

const withColor = (WrappedComponent) => {
  return function (props) {
    const [color, setColor] = useState();

    return <WrappedComponent color={color} {...props} />;
  };
};

export default withColor;
