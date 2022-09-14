import React from 'react'
import Header from './components/Header'
import Image from './components/Image'
import img1 from './img/img1.png'

class App extends React.Component{

    helpText = 'help text'
    header = 'header'
  
    render(){
      return (
        <div className='elements'>
          <Header title='Site Header'/>
          <h1>{this.header}</h1>
          <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
          <p>{this.helpText === 'help text' ? 'Yes' : 'No'}</p>
          <Image image={img1}/>
        </div>
      )
    }
  
    inputClick(){console.log('clicked')}
    mouseOver(){console.log('mouse over')}
}

export default App