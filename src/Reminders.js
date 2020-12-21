
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup, Form, ProgressBar} from 'react-bootstrap'
import { Line } from 'rc-progress';
import './Reminders.css'
import Switch from "react-switch";
import book1 from './books/14.jpg'
import book2 from './books/9.jpg'
import book3 from './books/13.jpg' 
import book4 from './books/11.jpg' 
import book5 from './books/7.jpg' 
import book6 from './books/8.jpg'
import book7 from './books/1.jpg' 
import book8 from './books/5.jpeg' 
import book9 from './books/4.jpg'  

class Reminders extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
 

                <Container className='list'>
                        <Row className='bar'>
                            <b>Reminders</b>
                        </Row>

                        <Row className='content times'>
                            <Container>
                                <Row className='time'>
                                    <Container className='t'>
                                 
                                        <Col className='t2'>
                                            <Container className='c1'>
                                            <Row className='t4'>
                                                <p>5:00PM</p>
                                            </Row>
                                            <Row className='t5'>
                                                <p>&nbsp;  Bible Club</p>
                                            </Row>
                                            </Container>
                                            
                                        </Col> 
                                        <Col className='t1'>
                                            <Col className='t3'>
                                                 <p>Tue/Thu</p>
                                            </Col>
                                            <Col>
                                                <Switch checked uncheckedIcon={false} checkedIcon={false}/>
                                            </Col>
                                        </Col> 
                                  
                                    </Container>
                                </Row>
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
                                                 <p>Sat/Sun</p>
                                            </Col>
                                            <Col>
                                                <Switch checked uncheckedIcon={false} checkedIcon={false}/>
                                            </Col>
                                        </Col> 
                                  
                                    </Container>
                                </Row>
                                <Row className='time'>
                                    <Container className='t'>
                                 
                                        <Col className='t2'>
                                            <Container className='c1'>
                                            <Row className='t4'>
                                                <p>9:00AM</p>
                                            </Row>
                                            <Row className='t5'>
                                                <p>&nbsp;  Read 60pgs</p>
                                            </Row>
                                            </Container>
                                            
                                        </Col> 
                                        <Col className='t1'>
                                            <Col className='t3'>
                                                 <p>Sat/Mon</p>
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
                            <b>Progress</b>
                        </Row>

                        <Row className='content v1'>
                            <Container>
                                <Row className='v2'>
                                    <Container>
                                        <Row>
                                           <b>Sapiens</b>
                                        </Row>
                                        <Row className="progress">
                                           <Line percent="20" strokeWidth="2" trailWidth="1" strokeColor="#00bd51" trailColor="white" />
                                        </Row>
                                         <Row>
                                            <p>on track to complete by Feb 20th, 2021 </p>
                                        </Row>
                                    </Container>
                                </Row>

                                <Row className='v2'>
                                    <Container>
                                        <Row>
                                           <b>The Selfish Gene</b>
                                        </Row>
                                        <Row className="progress">
                                           <Line percent="75" strokeWidth="2" trailWidth="1" strokeColor="#00bd51" trailColor="white" />
                                        </Row>
                                         <Row>
                                            <p>on track to complete by March 20th, 2021 </p>
                                        </Row>
                                    </Container>
                                </Row>
                  
                                  
                               
                            </Container>
                        </Row>


                </Container>
            


 
        );
    }
}


export default Reminders;
