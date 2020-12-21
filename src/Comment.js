
import React from 'react'
import {Container, Row, Col, FormControl, InputGroup} from 'react-bootstrap'
import './Comment.css'


class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Container className='cList'>
                        <Row className='bar'>
                                <b>The Selfish Gene </b>
                    
                        </Row>

                        <Row   className ='text'>
                            <p>We are survival machines – robot vehicles blindly programmed to preserve the selfish molecules known as genes. This is a truth which still fills me with astonishment. </p>

                        </Row>

                        <Row className='bar'>
                                <b>Comments </b>
                    
                        </Row>

                        <Row >
                            
                              <InputGroup className="mb-3">
                                    <FormControl  className="mb-2" placeholder="type comments"as="textarea" aria-label="type comments" />
                                </InputGroup>
                        </Row>

                        <Row className='bar'>
                                <b>Info</b>
                        </Row>


                        <Row className='tags'>
                            <Container> 
                                <Row>   
                                    <pre><b>Dates</b>                December 11th, 2020</pre>
                                </Row>
                                <Row>
                                    <pre><b>Tags</b>           Contemporary Civilizations</pre>
                                </Row>
                            </Container>
                        </Row>
                   


                </Container>

                <Row className='bar'>
                    <b>Send to Group </b>
                 </Row>
            </div>
 
        );
    }
}


export default Comment;
