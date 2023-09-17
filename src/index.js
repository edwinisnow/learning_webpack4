import React from 'react'
import { render } from 'react-dom'


const Greet = () => <h1>Hello from React</h1>

render(
    <Greet />,
    document.getElementById('target')
)