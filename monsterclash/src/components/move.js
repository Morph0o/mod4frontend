import React from 'react'

class Move extends React.Component{
    constructor(){
        super()
        this.state= {
            name: " ",
            attck: 0,
            desc: ""
        }
    }
    createmove = (event)=> {
        event.preventDefault()

        fetch('http://localhost:3000/moves',{
            method: "POST",
            header: {
                'Content-type': "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                desc: this.state.desc,
                attack: Math.floor((Math.random() * 50) + 20)
            })
        })
    }
    name = (event)=> {
        
        this.setState({
            name: event.target.value
        })}

   
    desc = (event) => {
        this.setState({
            desc: event.target.value
        })

    }
    

    render(){
        return(
            <div>
               <div classname="home">
                   <form onSubmit={this.createmove}>
                       <h2>Create Move</h2>
                       <label>Name</label>
                        <input type="text" name="name" placeholder="name" onChange={event => this.name(event)}/><br/>
                       
                       <label>Desciption</label>
                        <textarea name="desc" onChange={this.desc}>
                       </textarea><br/>
                       <input type="submit"/>


                   </form>
                   
               </div>
                
            </div>
        )
    }
}
export default Move