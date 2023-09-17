import React from 'react'
import { render } from 'react-dom'
import './style.css'

const Greet = () => <h1>Hello from React</h1>

render(
    <Greet />,
    document.getElementById('target')
)