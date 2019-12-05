import React from 'react'

class Fight extends React.Component{
    render(){
        return(
            <div>
            <div className="floatright">
                <select>
        {this.props.user.map(user => <option value={user}> {user.name}</option>)}
                </select>
                <div>
                player card
                </div>

                
            </div>
            <button>Fight!</button>
            <div className="floatleft" >
monster card
            </div>
            </div>
        )
    }
}
export default Fight