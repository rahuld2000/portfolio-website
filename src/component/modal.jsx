import React from 'react'
import "./modal.css";
function Modal(props) {

 let opengit=()=>{
    window.open(props.data.git)
  }

  console.log(props.data)
  return (
    <div className='modal'>
   <div  className='modal_main'>
  
    <div>
        <img className='mod_img' src={props.data.imgUrl} alt="error"  />
    </div>
    <div className='mod_txt'>
      <p className='mod_title'>{props.data.title}</p>
    
      <p>{props.data.descrip}</p>
     <span className='mod_btn'><button onClick={opengit}>git</button>
     <button onClick={()=>window.open(props.data.live)}>live</button>
     </span>
    </div>
   
    </div>
    <div>
    <button className='mod_close' onClick={props.parent()}>close</button>
   </div>
    </div>
  
  )
}

export default Modal