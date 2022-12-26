import { Component } from "react";
import React from "react";

import "./styles.css";

interface IButtonProps {
  handleOnClick: () => void;
  toDisable: boolean;
}

class HandlerButton extends Component<IButtonProps> {
  render() {
    const { handleOnClick, toDisable } = this.props as IButtonProps;
    return (
      <button className="button" onClick={handleOnClick} disabled={toDisable}>
        Load more posts
      </button>
    );
  }
}

export { HandlerButton };
