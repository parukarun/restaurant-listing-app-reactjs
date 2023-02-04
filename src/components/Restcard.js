import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Restcard.css'





function Restcard({restaurant}) {
  console.log(restaurant);
  return (
    
    
    <Col className='mt-5' sm={6} md={4} lg={3} xl={3} >
      <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:'none'}}>
        <Card style={{
          backgroundColor: 'black',
          border:'1px solid grey',
          
          }}>
          <Card.Img  variant="top" className='image1' src={restaurant.photograph}/>
          <Card.Body>
            <Card.Title style={{marginLeft:'-.2em',fontSize:'1.2rem', color:'orange'}}>{restaurant.name}</Card.Title>
            <Card.Text style={{color:'white',fontSize:'.9rem'}}>
              {restaurant.neighborhood}
            </Card.Text>
            
          </Card.Body>
        </Card>
        </Link>
    </Col>
    

    
    
  )
}

export default Restcard