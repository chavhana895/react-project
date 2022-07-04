import React,{useContext} from 'react'
import { useEffect } from 'react';
import noteContext from './noteContext'

function About() {
    const a = useContext(noteContext);
    useEffect(()=>{
        a.update();
        // eslint-disable-next-line 
    },[])
  return (
    <div>
       This is About {a.state.name} {a.state.lastName}
    </div>
  )
}

export default About