import React from 'react'
import { render } from 'react-dom'
import './style.css'

const Greet = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <div id="image"></div>
        </div>
    )
}



render(
    <Greet />,
    document.getElementById('target')
)