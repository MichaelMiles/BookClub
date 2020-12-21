
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup, Form, ProgressBar} from 'react-bootstrap'
import { Line } from 'rc-progress';
import './SearchResult.css'
import book1 from './books/6.jpg'
import book2 from './books/2.jpg'
import book3 from './books/3.jpg' 


class SearchResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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

                        <Row className='searchBar'>
                              <Form className='form'>
                                <FormControl type="text" placeholder="Rowling" className="mr-sm-2" />
                              </Form>
                        </Row>

                        <Row className='content books'>
            
                                <Col className='intro'>
                                    <img src={book1} alt ="" width="85.88" height="136.23"/>
                                </Col>
                                <Col className='intro'>
                                    <Container>
                                        <Row>
                                            <p className='title'>
                                            Harry Potter and the Deathly Hallows
                                            </p>
                                        </Row>
                                        <Row>
                                            <p className='author'>
                                                By J.K. Rowling
                                            </p>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className='intro'>
                                    +
                                </Col>
             
                        </Row>

                        <Row className='content books'>
            
                                <Col className='intro'>
                                    <img src={book2} alt ="" width="85.88" height="136.23"/>
                                </Col>
                                <Col className='intro'>
                                    <Container>
                                        <Row>
                                            <p className='title'>
                                             Harry Potter and the Goblet of Fire

                                            </p>
                                        </Row>
                                        <Row>
                                            <p className='author'>
                                                By J.K. Rowling
                                            </p>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className='intro'>
                                    +
                                </Col>
             
                        </Row>

                        <Row className='content books'>
            
                                <Col className='intro'>
                                    <img src={book3} alt ="" width="85.88" height="136.23"/>
                                </Col>
                                <Col className='intro'>
                                    <Container>
                                        <Row>
                                            <p className='title'>
                                            Harry Potter and the Chamber of Secrets

                                            </p>
                                        </Row>
                                        <Row>
                                            <p className='author'>
                                                By J.K. Rowling
                                            </p>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className='intro'>
                                    +
                                </Col>
             
                        </Row>

                       
                </Container>
            


 
        );
    }
}


export default SearchResult;
