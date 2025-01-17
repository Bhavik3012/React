import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"

function myapp() {
    return (
        <div>
            <h1>Custom App | Chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     children: "click me to visit google",
// };

  const anotherElement = (
    <a href="http://google.com" target='_blank'>Visit google </a>
  )

  const anotheruser = "SBJOP"

  const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target: "_blank"},
    'click me to visit google.com',
    anotheruser
  )

ReactDOM.createRoot(document.getElementById('root')).render(

   reactElement

)
