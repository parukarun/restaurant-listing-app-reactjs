import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';


function Restaurantlist() {
    const [restaurantlist,setRestaurantlist]=useState([])


    //to create a function for API call
    const getRestaurant=async()=>{
        //async await method to create function avoid time delay
       await fetch('/restaurants.json') //acync call
       .then((data)=>data.json()
        .then((result)=>setRestaurantlist(result.restaurants))
        
       )
    }

   
    console.log(restaurantlist);

    useEffect(()=>{
        getRestaurant()
    },[])

    

  return (
  
      
    <Row>
      
        {
          restaurantlist.map(item=>(
            <Restcard restaurant={item}/>
            // <h1>{item.name}</h1>
              
            
          ))
        }
    </Row> 

   
    
  )
}

export default Restaurantlist