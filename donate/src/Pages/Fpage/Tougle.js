import React, { useState } from 'react';

 function Tougle() {
    const[state,setstate]=useState(false)
    const change=()=>{
            setstate(!state)
            if(state===false){
                console.log(0)
            }
            else{
                console.log(1)
            }
    }
  return (
    <div>
      <button onClick={change} className={(state?'btn btn-success':'btn btn-danger')}>{
      state?'Revoke':'Grant'
      }</button>
    </div>
  );
}
export default Tougle;