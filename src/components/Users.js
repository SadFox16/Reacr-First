import React from 'react'

class Users extends React.Component{

    users = [
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Marley',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            age: 22,
            isHappy: false
        },
    ]

    render(){
        if(this.users.length > 0){
            return(
                <div>
                    {this.users.map((i) => (
                    <div className='user' key={i.id}>
                        <h3>{i.firstname} {i.lastname}</h3>
                        <p>{i.bio}</p>
                        <b>{i.isHappy ? 'Happy :)' : 'Unhappy :('}</b>
                     </div>))}
                </div>
             )
        }else{
            return(
                <div className='user'>
                    <h3>Users not found</h3>
                </div>
            )
        }
        
    }
}

export default Users