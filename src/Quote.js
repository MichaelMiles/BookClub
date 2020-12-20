
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Quote.css'


class Quote extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Container className='list'>
                        <Row className='bar'>
                                <b>The Selfish Gene </b>
                    
                        </Row>

                        <Row   className ='text'>
                            <p>We are survival machines – robot vehicles blindly programmed to preserve the selfish molecules known as genes. This is a truth which still fills me with astonishment. </p>

                        </Row>

                        <Row className='bar'>
                                <b>Comments </b>
                    
                        </Row>

                        <Row   className ='text'>
                            
                            <p>
                                <b>David:</b> Reminds me of the discussion we had last week about science and religion. I wonder what Dawkins would think of  discussions of free will. Augustine also believes in a limited free will, but for Dawkins this is b...
                            </p>
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
                    <b>Add Comment </b>
                 </Row>
            </div>
 
        );
    }
}


export default Quote;
