import React from 'react'
import Coundown from './Coundown'

export default function DisplayCount() {

    const [days, hours, minutes, sec]=Coundown()

    const display= ( times,num)=>{
        return(
            <div className='d-flex flex-column text-center col-12 col-md-6 col-lg-3'>
                <h1 style={{fontSize:'10vmin'}}className='text-light'>{num}</h1>
                <h2>{times}</h2>
            </div>
        )
    }




  return (
    <div className='d-flex col-11 m-5 justify-content-evenly flex-wrap border'>
       {display('days',days)}
       {display('hours',hours)}
       {display('minutes',minutes)}
       {display('sec',sec)}
    </div>
  )
}
