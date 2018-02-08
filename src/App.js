import React, { Component } from 'react'

import { nato } from './util'

const Pill = ({ bg = 'blue', text }) => (
  <span className={`inline-block mb1 mr1 p1 bg-${bg} white rounded`}>
    {text}
  </span>
)

const Entry = ({ char }) => {
  const lookup = nato[char.toUpperCase()]

  if (char === '\n') return <hr className="mt1 mb2" />
  if (char === ' ') return <Pill bg="green" text="[space]" />
  if (!lookup) return <Pill bg="green" text={char} />
  return <Pill text={lookup} />
}

class App extends Component {
  state = { text: '' }

  componentDidMount() {
    const text = decodeURIComponent(window.location.hash.slice(1))
    this.setState({ text })
  }

  handleChange = e => {
    this.setState({ text: e.target.value }, this.updateUrl)
  }

  updateUrl = () => {
    const { text } = this.state
    window.location.hash = encodeURIComponent(text)
  }

  render() {
    const { text } = this.state

    return (
      <div className="p2 container">
        <h1 className="mb2">Alpha Bravo Charlie</h1>
        <textarea
          type="text"
          className="mb2 textarea"
          rows="4"
          placeholder="Start typing..."
          value={text}
          onChange={this.handleChange}
        />
        {text && (
          <div className="mt2">
            <h3>Message:</h3>
            <div className="h5">
              {text.split('').map((char, i) => <Entry key={i} char={char} />)}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
