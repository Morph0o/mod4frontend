import React from 'react'

class Move extends React.Component{
    createmove = ()=> {
        fetch('http://localhost:3000/moves',{
            method: "POST",
            header: {
                'content-type': "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({
                
            })
        })

        
    }

    render(){
        return(
            <div>
               <div>
                   <form>
                       <h2>Create Move</h2>
                       <label>Name</label>
                       <input type="text" name="name" placeholder="name"/><br/>
                       <label>Strength</label>
                       <input type="integer" name="str" value={Math.floor((Math.random() * 50) + 20)}/><br/>
                       <label>Desciption</label>
                       <textarea name="desc">
                       </textarea><br/>
                       <input type="submit"/>


                   </form>
                   
               </div>
                
            </div>
        )
    }
}
export default Move