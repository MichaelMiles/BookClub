
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
 

                <Container className='glist'>

                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Quote Sharing w/ Alice
                                    </p>
                                </Col>
                    
             
                        </Row>


                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Contemporary Civilizations (Tue/Thu 10am)
                                    </p>
                                </Col>
                    
             
                        </Row>


                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Family Book Club (Sun 9pm)
                                    </p>
                                </Col>
                    
             
                        </Row>

                        <Row className='content gBooks'>
            
                                <Col className='gIntro'>
                                   <FontAwesomeIcon className="icon" icon={faBook}  className="faa" size="3x"  />
                                </Col>
                                <Col className='gIntro g2'>
                                    <p className='gTitle'>
                                    Bible Study Group (Sun 2pm)
                                    </p>
                                </Col>
                    
             
                        </Row>

                       
                </Container>
            


 
        );
    }
}


export default  Group;
