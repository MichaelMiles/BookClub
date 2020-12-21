
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Personal.css'
import { faHome, faBookOpen, faUserShield, faUser, faChartBar, faLanguage} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Personal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Container className='pList'>

                    <Row>
                        <Container className="perContainer">
                            <Col >
                                 <FontAwesomeIcon icon={faUser} size="6x"  />
                            </Col>
                        </Container>
                    </Row>
                    

                     <Row className="perText">
                        <Container className="perContainer">
                            <Col >
                                Tony Ryou
                            </Col>
                        </Container>
                    </Row>
                    


                    <Row className="perText">
                        <Container className="perContainer">
                            <Col >
                            Total Books: 92
                            </Col>
                        </Container>
                    </Row>
                    
      
                    <Row className="Stat perStat">
                         <Container className="statContainer">
                        <Col>        
                            <FontAwesomeIcon icon={faChartBar}/>
                        </Col>
                        <Col className="pTex">
                        <p> Statistics</p>
                        </Col>
                          </Container>
                    </Row>
               

                     <Row className="Report">
                        <Col>
                            Weekly Report
                        </Col>
                        <Col className="arrow">
                            >
                        </Col>
                    </Row>
                     <Row className="Report">
                        <Col>
                            Monthly Report
                        </Col>
                        <Col>
                            >
                        </Col>
                    </Row>
                     <Row className="Report">
                        <Col>
                            Annualy Report
                        </Col>
                        <Col>
                            >
                        </Col>
                    </Row>
                                         <Row className="Report reminderr">
                        <Col>
                            Reminders
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>

                    
                            <Row className="Stat">
                         <Container className="statContainer">
                        <Col>        
                             <FontAwesomeIcon icon={faLanguage} />
                        </Col>
                        <Col className="pTex">
                            <p> Language</p>
                        </Col>
                          </Container>
                    </Row>
               
                       <Row className="Stat">
                         <Container className="statContainer">
                        <Col>        
                              <FontAwesomeIcon icon={faBookOpen} />
                        </Col>
                        <Col className="pTex">
                     <p> Reading Speed</p>
                        </Col>
                          </Container>
                    </Row>
               
                       <Row className="Stat">
                         <Container className="statContainer">
                        <Col>        
                               <FontAwesomeIcon icon={faUserShield}/>
                        </Col>
                        <Col className="pTex">
                          <p> Security (Beta)</p>
                        </Col>
                          </Container>
                    </Row>
               


                </Container>
 
 
        );
    }
}


export default Personal;
