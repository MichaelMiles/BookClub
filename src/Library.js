
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup, Form, ProgressBar} from 'react-bootstrap'
import { Line } from 'rc-progress';
import './Library.css'
import SearchResult from './SearchResult'
import book1 from './books/14.jpg'
import book2 from './books/9.jpg'
import book3 from './books/13.jpg' 
import book4 from './books/11.jpg' 
import book5 from './books/7.jpg' 
import book6 from './books/8.jpg'
import book7 from './books/1.jpg' 
import book8 from './books/5.jpeg' 
import book9 from './books/4.jpg'  

class Library extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1
        }
    }

    render() {
        if(this.state.page == 1) {
        return (
 

                <Container className='list'>
                        <Row className='bar content'>
                            <Col className='left'>
                                <p>Library </p>
                            </Col>
                            <Col className='right'>
                                 <p>+</p>
                            </Col> 
                        </Row>

                        <Row className='searchBar' onClick = {() => {this.setState({page: 2})}}>
                              <Form className='form'>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                              </Form>
                        </Row>

                        <Row className='content books'>
                            <Col className='book'>
                                <Container>
                                    <Row>
                                    <img src={book1} alt ="" width="85.88" height="136.23"/>
                                    </Row>
                                    <Row>
                                        <Line percent="20" strokeWidth="6" trailWidth="5" strokeColor="#00bd51" trailColor="white" />
                                    </Row>
                                </Container>
                            </Col>
                            <Col className='book'>
                                <Container>
                                    <Row>
                                         <img src={book2} alt ="" width="85.88" height="136.23"/>
                                    </Row>
                                     <Row>
                                        <Line percent="80" strokeWidth="6" trailWidth="5" strokeColor="#00bd51" trailColor="white" />
                                    </Row>
                                </Container>
                            </Col>
                            <Col className='book'>
                                <Container>
                                    <Row>
                                        <img src={book3} alt ="" width="85.88" height="136.23"/>
                                    </Row>
                                    <Row>
                                            <Line percent="40" strokeWidth="6" trailWidth="5" strokeColor="#00bd51" trailColor="white" />
                                    </Row>
                                </Container>
                            </Col>
                    
                        </Row>

                        <Row className='bar Content'>
                             <Col className='left'>
                                <p>Completed </p>
                              </Col>
                                <Col className='right'>
                                 <p></p>
                            </Col> 
                        </Row>
                        <Row className='content'>
                            <Row className='content shelf'>
                                <Col className='book'>
                                    <img src={book4} alt ="" width="85.88" height="136.23"/>   
                                </Col>
                                <Col className='book'>
                                        <img src={book5} alt ="" width="85.88" height="136.23"/>
                                </Col>
                                <Col className='book'>
                                    <img src={book6} alt ="" width="85.88" height="136.23"/>
                                </Col>
                            </Row>
                            <Row className='content shelf'>
                                <Col className='book'>
                                    <img src={book7} alt ="" width="85.88" height="136.23"/>   
                                </Col>
                                <Col className='book'>
                                        <img src={book8} alt ="" width="85.88" height="136.23"/>
                                </Col>
                                <Col className='book'>
                                    <img src={book9} alt ="" width="85.88" height="136.23"/>
                                </Col>
                            </Row>
                        </Row>

                </Container>
            


 
        );
        } else  {
            return (<SearchResult />);
        }
    }
}


export default Library;
