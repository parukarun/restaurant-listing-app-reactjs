import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Review({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);

  return (
    
       
            <>
            <Button className='mt-4 ' style={{float:'left'}} variant='success'
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Reviews
          </Button>
          {review.map(item=>(
            <Collapse in={open}>
            <div style={{marginTop:'4.5em'}} id="example-collapse-text">
              <h5>{item.name} <span className='text-muted fs-6 ms-3'>{item.date}</span></h5>
              <h6 className='fs-6'>Rating : <span className='fs-5' style={{color:'green',fontWeight:'bold'}}>{item.rating}</span> </h6>
              <p className='mb-5' style={{fontSize:'.9rem'}}>{item.comments}</p>
              <hr/>

    
            </div>
          </Collapse>
          ))}
          
          </>
        
        
    
  )
}

export default Review