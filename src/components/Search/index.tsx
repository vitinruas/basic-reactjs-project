import { Component } from 'react'
import './styles.css'

interface ISearchProps {
  value: string
  handleOnChange: (value: string) => void
}

class Search extends Component<ISearchProps> {
  render() {
    const { value, handleOnChange } = this.props
    return (
      <div className="search-container">
        {!!value && (
          <span className="search-title">
            Searching for: <strong>{value}</strong>
          </span>
        )}
        <input
          className="search-input"
          type="text"
          placeholder="Type to look for something"
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
        />
      </div>
    )
  }
}

export { Search }
