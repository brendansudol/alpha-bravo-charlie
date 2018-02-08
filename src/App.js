import React, { Component } from 'react'

import { codeWords, sources } from './util'

const Pill = ({ bg = 'blue', text }) => (
  <span className={`inline-block mb1 mr1 px1 py05 bg-${bg} white rounded`}>
    {text}
  </span>
)

const Codename = ({ char, source }) => {
  const lookup = codeWords[char.toUpperCase()]
  const name = lookup && lookup[source]

  if (char === '\n') return <hr className="mt1 mb2" />
  if (char === ' ') return <Pill bg="green" text="[space]" />
  if (!name) return <Pill bg="green" text={char} />
  return <Pill text={name} />
}

class App extends Component {
  constructor(props) {
    super(props)

    const { abc, txt } = props.urlParams

    this.state = {
      source: abc || 'nato',
      phrase: txt ? decodeURIComponent(txt) : ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value }, this.updateUrl)
  }

  updateUrl = () => {
    const { source, phrase } = this.state
    window.location.hash = `abc=${source}&txt=${encodeURIComponent(phrase)}`
  }

  render() {
    const { source, phrase } = this.state

    return (
      <div className="p2 container">
        <div className="h3 sm-h2 caps">💬🔤✨</div>
        <h1 className="m0 h2 sm-h1">Alpha Bravo Charlie</h1>
        <p className="mt0 mb3 h5 sm-h4">
          Convert names / phrases with a phonetic alphabet to aid with spelling
          and clarity. More details{' '}
          <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">
            here
          </a>.
        </p>
        <div className="mb1 h5 sm-right">
          <label className="mr1">Alphabet:</label>
          <select name="source" value={source} onChange={this.handleChange}>
            {sources.map(d => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        <textarea
          name="phrase"
          type="text"
          className="mb2 textarea"
          rows="4"
          placeholder="Start typing..."
          value={phrase}
          onChange={this.handleChange}
        />
        {phrase && (
          <div className="mt3">
            <h3>Results:</h3>
            <div className="h5">
              {phrase
                .split('')
                .map((c, i) => <Codename key={i} char={c} source={source} />)}
            </div>
          </div>
        )}
        <footer className="mt4 h5">
          <a
            className="mr2"
            href="https://github.com/brendansudol/alpha-bravo-charlie"
          >
            Code on GitHub
          </a>
          <a href="https://brendansudol.com/">Made by @brensudol</a>
        </footer>
      </div>
    )
  }
}

export default App
