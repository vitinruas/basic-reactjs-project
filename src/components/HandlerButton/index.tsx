import { Component } from 'react'
import React from 'react'

import './styles.css'

export interface IHandlerButtonProps {
  text: string
  handleOnClick: () => void
  toDisable: boolean
}

class HandlerButton extends Component<IHandlerButtonProps> {
  render() {
    const { text, handleOnClick, toDisable } = this.props as IHandlerButtonProps
    return (
      <button className="button" onClick={handleOnClick} disabled={toDisable}>
        {text}
      </button>
    )
  }
}

export { HandlerButton }
