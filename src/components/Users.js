import React from 'react'
import User from './User'

class Users extends React.Component{

    render(){
        if(this.props.users.length > 0){
            return(
                <div>
                    {this.props.users.map((i) => (
                        <User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={i.id} user={i}/>
                    ))}
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