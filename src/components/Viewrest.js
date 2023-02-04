import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Image  from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Review from './Review';


function Viewrest() {
    const urlParams=useParams()  //get the id through the url
    console.log(urlParams.id);

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
    },[]);
    

    const viewrest=restaurantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest);


  return (
    <div>
        {
            viewrest?(
                <Container fluid>
                    <Row style={{marginRight:'0px',marginLeft: '0px'}}>
                    <h3 className='mt-3 mb-4 text-warning text-center' >{viewrest.name}</h3>
                <Col className='mb-2' lg={5} sm={6} md={5}>
                    <Image  fluid src={viewrest.photograph} className=' square border border-warning' style={{width:'32.5em',height:'32em'}}/>
                </Col>

                <Col md={7} sm={6} lg={7}  >
                
                    <ListGroup >
                        <ListGroup.Item variant='dark' className='text-primary'>ID : {viewrest.id}</ListGroup.Item>
                        <ListGroup.Item >Name : {viewrest.name}</ListGroup.Item>
                        <ListGroup.Item >Cuisine Type : {viewrest.cuisine_type}</ListGroup.Item>
                        <ListGroup.Item >Address : {viewrest.address}</ListGroup.Item>
                        <ListGroup.Item >neighborhood : {viewrest.neighborhood}</ListGroup.Item>
                        
                    </ListGroup>
                    <><Restop op={viewrest.operating_hours}/> <Review review={viewrest.reviews}/></>
                    
                </Col>
  
            </Row>
                </Container>
                
            ):'null'
            
        }
    </div>
  )
}

export default Viewrest