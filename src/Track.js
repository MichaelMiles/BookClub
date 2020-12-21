
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup, Form, ProgressBar} from 'react-bootstrap'
import { Line } from 'rc-progress';
import './Track.css'
import Switch from "react-switch";

import book2 from './books/9.jpg'
 

class Track extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
 

                <Container className='list'>
                        <Row className='bar'>
                            <b>Family Book Club</b>
                        </Row>

                        <Row className='content Ktimes'>
                            <Container>
                                <Row className='time'>
                                    <Container className='t'>
                                 
                                        <Col className='t2'>
                                            <Container className='c1'>
                                            <Row className='t4'>
                                                <p>9:00PM</p>
                                            </Row>
                                            <Row className='t5'>
                                                <p>&nbsp;  Family Club</p>
                                            </Row>
                                            </Container>
                                            
                                        </Col> 
                                        <Col className='t1'>
                                            <Col className='t3'>
                                                 <p>Sun</p>
                                            </Col>
                                            <Col>
                                                <Switch checked uncheckedIcon={false} checkedIcon={false}/>
                                            </Col>
                                        </Col> 
                                  
                                    </Container>
                                </Row>
                         
                            </Container>
                        </Row>

                        <Row className='bar Content'>
                            <b>Latest</b>
                        </Row>

              <Container className='list'>

                    <Row className='KBook'>
                        <Col className='c1'>
                            <img src={book2} alt ="" width="62" height="95"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                <b>Ana </b>          
                            </Row>
                             <Row className='r1'>
                                pg. 170
                            </Row>
                            <Row className='r2'>
                                “Culture tends to argue that it forbids only that which is unnatural. But from a biological perspective, nothing is un..” 
                            </Row>
                      
                        </Col>
                        
                    </Row>

                     <Row className='KBook'>
                        <Col className='c1'>
                            <img src={book2} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                <b>Samuel</b>          
                            </Row>
                             <Row className='r1'>
                                pg. 153
                            </Row>
                            <Row className='r2'>
“How do you cause people to believe in an imagined order such as Christianity, democracy or capitalism?”

                            </Row>
                            
                        </Col>
                    </Row>
                    <Row className='KBook'>
                        <Col className='c1'>
                            <img src={book2} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                <b>You </b>          
                            </Row>
                             <Row className='r1'>
                                pg. 153
                            </Row>
                            <Row className='r2'>

“How do you cause people to believe in an imagined order such as Christianity, democracy or capitalism?”
                            </Row>
                      
                        </Col>
                    </Row>

                     <Row className='KBook'>
                        <Col className='c1'>
                            <img src={book2} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                <b>Ana </b>          
                            </Row>
                             <Row className='r1'>
                                P.22
                            </Row>
                            <Row className='r2'>
                               According to Buddhism, the root of suffering is neither the feeling of pain nor of sadness nor even of meaninglessness...
                            </Row>
                         
                        </Col>
                    </Row>



                </Container>

                </Container>
            


 
        );
    }
}


export default Track;
