
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './BookList.css'
import book1 from './books/14.jpg'
import book2 from './books/9.jpg'
import book3 from './books/13.jpg'
import book4 from './books/11.jpg'
import book5 from './books/9.jpg'
import book6 from './books/12.jpg'

class BookList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Container className='bookList'>

                    <Row className='book'>
                        <Col className='c1'>
                            <img src={book1} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.22
                            </Row>
                            <Row className='r2'>
                                We are survival machines – robot vehicles blindly programmed to preserve the selfish molecules known as genes.
                            </Row>
                            <Row className='r3'>
                                3 hours ago
                            </Row>
                        </Col>
                        
                    </Row>

                     <Row className='book'>
                        <Col className='c1'>
                            <img src={book2} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.348
                            </Row>
                            <Row className='r2'>
                                Happiness does not really depend on objective conditions of either wealth, health or even community. Rather, it...
                            </Row>
                            <Row className='r3'>
                                12 hours ago
                            </Row>
                        </Col>
                    </Row>
                    <Row className='book'>
                        <Col className='c1'>
                            <img src={book3} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.35
                            </Row>
                            <Row className='r2'>
                               A basic rule of mathematical life: if the universe hands you a hard problem, try to solve an easier one instead, and hope the ...
                            </Row>
                            <Row className='r3'>
                                1 day ago
                            </Row>
                        </Col>
                    </Row>

                    <Row className='book'>
                        <Col className='c1'>
                            <img src={book4} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                Ch.6
                            </Row>
                            <Row className='r2'>
                               The LORD saw how great the wickedness of the human race had become on the earth, and that every inclination of the thoughts ...
                            </Row>
                            <Row className='r3'>
                                2 days ago
                            </Row>
                        </Col>
                    </Row>

                     <Row className='book'>
                        <Col className='c1'>
                            <img src={book5} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.22
                            </Row>
                            <Row className='r2'>
                               According to Buddhism, the root of suffering is neither the feeling of pain nor of sadness nor even of meaninglessness...
                            </Row>
                            <Row className='r3'>
                                4 hours ago
                            </Row>
                        </Col>
                    </Row>


                     <Row className='book'>
                        <Col className='c1'>
                            <img src={book6} alt ="" width="58" height="92"/>
                        </Col>
                        <Col className='c2'>
                            <Row className='r1'>
                                P.1
                            </Row>
                            <Row className='r2'>
                                A book review is a form of literary criticism in which a book is scholarly ...
                            </Row>
                            <Row className='r3'>
                                3 hours ago
                            </Row>
                        </Col>
                    </Row>


                </Container>


                <Row className='add'>
                    <b>Add New </b>
                    
                </Row>
            </div>
 
        );
    }
}


export default BookList;
