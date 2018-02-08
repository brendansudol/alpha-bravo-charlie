import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { getParams } from './util'

import 'ace-css/css/ace.min.css'
import './index.css'

const urlParams = getParams(window.location.hash)
const div = document.getElementById('root')

render(<App urlParams={urlParams} />, div)
