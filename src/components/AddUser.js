import React from 'react'

class AddUser extends React.Component{

    userAdd = {}

    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            bio: '',
            age: 0,
            isHappy: false,
        }
    }

    render(){
        return(
            <form ref={(elem) => this.myForm = elem}>
                <input placeholder='First Name' onChange={(evnt) => this.setState({first_name: evnt.target.value})}/>
                <input placeholder='Last Name' onChange={(evnt) => this.setState({last_name: evnt.target.value})}/>
                <input type='email' placeholder='Email' onChange={(evnt) => this.setState({email: evnt.target.value})}></input>
                {/* <input placeholder='Age' onChange={(evnt) => this.setState({age: evnt.target.value})}/> */}
                {/* <label htmlFor='isHappy'>Happy?</label>
                <input type='checkbox' id='isHappy'onChange={(evnt) => this.setState({isHappy: evnt.target.checked})}/> */}
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        // age: this.state.age,
                        // isHappy: this.state.isHappy,
                    }
                    if(this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }}>Add</button>
            </form>
        )
    }
}

export default AddUser