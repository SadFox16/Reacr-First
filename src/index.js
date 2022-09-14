import React from 'react';
//import ReactDOM from 'react-dom/client'
import * as ReactDOMClien from 'react-dom/client'

//View without JSX
// ReactDOM.render(React.createElement('input', {
//     placeholder: 'help text',
//     onClick: () => console.log('clicked'),
//     onMouseEnter: () => console.log('mouse over'),
// }), document.getElementById("app"))


//View with JSX
const inputClick = () => console.log('clicked') //creating function and write it to variable
const mouseOver = () => console.log('mouse over')

const helpText = 'help text'
const header = 'header'

const elements = (
    <div className='elements'>
        <h1>{header}</h1>
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
        <p>{helpText === 'help text' ? 'Yes' : 'No'}</p>
    </div>
)

const app = ReactDOMClien.createRoot(document.getElementById('app'));
app.render(elements)