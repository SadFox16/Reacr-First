import React from 'react'
import Header from './components/Header'
import Image from './components/Image'
import img1 from './img/img1.png'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            helpText: 'help text',
            header: 'site header',
            userData: ''
        }

        this.inputClick = this.inputClick.bind(this)
    }
  
    render(){
      return (
        <div className='elements'>
          <Header title='Site Header'/>
          <h1>{this.state.header}</h1>
          <h2>{this.state.userData}</h2>
          <input 
            onChange={event => this.setState({userData: event.target.value})} 
            placeholder={this.state.helpText} 
            onClick={this.inputClick} 
            onMouseEnter={this.mouseOver} 
            />
          <p>{this.state.headerhelpText === 'help text' ? 'Yes' : 'No'}</p>
          <Image image={img1}/>
        </div>
      )
    }
  
    inputClick(){
        this.setState({helpText: 'Changed'})
        console.log('clicked')
    }
    mouseOver(){console.log('mouse over')}
}

export default App