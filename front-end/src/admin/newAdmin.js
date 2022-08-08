//Name of employee , Designation , Role of working , Email Id , Mobile No , Password

import React, { useState } from 'react'

function NewAdmin() {
  const [Name,setName ] = useState()
  const [Des,setDes ] = useState()
  const [Role,setRole ] = useState()
  const [Email,setEmail ] = useState()
  const [Mob,setMob ] = useState()
  const [Pass,setPass ] = useState()

const HandleSubmit = (e)=>{
  e.preventDefault()
  console.log(Name,Des,Role,Email,Mob,Pass)
  
}

  return (
    <div>
        <h1>new User</h1>
        <form onSubmit={HandleSubmit}>
            <label>Name of Employee <input type='text' onChange={(e)=>setName(e.target.value)} /></label><br /><br />
            <label>Designation<input type='text' onChange={(e)=>setDes(e.target.value)}/></label><br /><br />
            <label>Role of working<input type='text' onChange={(e)=>setRole(e.target.value)}/></label><br /><br />
            <label>Email Id<input type='email' onChange={(e)=>setEmail(e.target.value)}/></label><br /><br />
            <label>Mobile No<input type='number' onChange={(e)=>setMob(e.target.value)}/></label><br /><br />
            <label>Password<input type='password' onChange={(e)=>setPass(e.target.value)}/></label><br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewAdmin