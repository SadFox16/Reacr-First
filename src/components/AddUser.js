import React from 'react'

class AddUser extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 0,
            isHappy: false,
        }
    }

    render(){
        return(
            <form>
                <input placeholder='First Name' onChange={(evnt) => this.setState({firstname: evnt.target.value})}/>
                <input placeholder='Last Name' onChange={(evnt) => this.setState({lastname: evnt.target.value})}/>
                <textarea placeholder='Bio' onChange={(evnt) => this.setState({bio: evnt.target.value})}></textarea>
                <input placeholder='Age' onChange={(evnt) => this.setState({age: evnt.target.value})}/>
                <label htmlFor='isHappy'>Happy?</label>
                <input type='checkbox' id='isHappy'onChange={(evnt) => this.setState({isHappy: evnt.target.checked})}/>
                <button type='button' onClick={() => this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                })}>Add</button>
            </form>
        )
    }
}

export default AddUser