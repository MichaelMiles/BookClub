
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup, Form, ProgressBar} from 'react-bootstrap'
import './Group.css'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Group extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
 

                <Container className='list'>

                        <Row className='content books'>
            
                                <Col className='intro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="fa" size="10x"  />
                                </Col>
                                <Col className='intro'>
                                    <p className='title'>
                                    Harry Potter and the Deathly Hallows
                                    </p>
                                </Col>
                    
             
                        </Row>

         

                       
                </Container>
            


 
        );
    }
}


export default  Group;
