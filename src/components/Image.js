import React from 'react'

class Image extends React.Component{
    render(){
        return(
            <img crs={this.props.image} alt='img1'/>
        )
    }
}

export default Image