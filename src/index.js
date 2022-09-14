import React from 'react'
//import ReactDOM from 'react-dom/client'
import * as ReactDOMClien from 'react-dom/client'
import App from './App'
import './css/main.css'

//View without JSX
// ReactDOM.render(React.createElement('input', {
//     placeholder: 'help text',
//     onClick: () => console.log('clicked'),
//     onMouseEnter: () => console.log('mouse over'),
// }), document.getElementById("app"))


//View with JSX
// const inputClick = () => console.log('clicked')
// const mouseOver = () => console.log('mouse over')
// const helpText = 'help text'
// const header = 'header'

const app = ReactDOMClien.createRoot(document.getElementById('app'));
app.render(<App/>)