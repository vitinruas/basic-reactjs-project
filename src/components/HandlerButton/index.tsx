import { Component } from 'react'
import React from 'react'

import './styles.css'

interface IButtonProps {
  text: string
  handleOnClick: () => void
  toDisable: boolean
}

class HandlerButton extends Component<IButtonProps> {
  render() {
    const { text, handleOnClick, toDisable } = this.props as IButtonProps
    return (
      <button className="button" onClick={handleOnClick} disabled={toDisable}>
        {text}
      </button>
    )
  }
}

export { HandlerButton }
