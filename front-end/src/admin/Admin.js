import React, { useState } from 'react'


function Admin() {
    const [id,setId] = useState()
    const [pass,setPass] = useState()

    const HandleSubmit = (e)=>{
        e.preventDefault()
        console.log(id,pass)
    }
  return (
    <div>
        <h1>Admin data</h1>
        <form onSubmit={HandleSubmit}>
            <label>
                Admin Id : 
                <input type='text' onChange={(e)=>setId(e.target.value)}/>
            </label><br /><br />
            <label>
                Password : 
                <input type='password' onChange={(e)=>setPass(e.target.value)} />
            </label>  
            <p>forget password</p>         
            <button type='submit'> submit
                </button> 
        </form>
    </div>
  )
}

export default Admin