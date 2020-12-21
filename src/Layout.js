
import React from 'react'
import './Layout.css'
import { faHome, faBookOpen, faUserFriends, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Container, Row, Col} from 'react-bootstrap'
import BookList from './BookList'
import Quote from './Quote'
import Comment from './Comment'
import Library from './Library'
import Reminders from './Reminders'
import SearchResult from './SearchResult'
import Group from './Group'
import Track from './Track'
import Personal from './Personal'

class Layout extends React.Component {

  constructor(props) {
    super(props);
    // this.state = 
  }

  render() {
    return (
        <div className="layout">
            <div className = "bookstagram">
                <p>
                Bookstagram
                </p>
            </div>
            <div className = "content" >
                <Personal />
            </div> 
            <Container className = "menu">
                <Col className="icon"> 
                    <Row>
                     <FontAwesomeIcon icon={faHome} className="fa" />
                     </Row>
                     <Row className="title">
                        Home
                     </Row>
                </Col>    
                <Col className="icon"> 
                    <Row>
                         <FontAwesomeIcon icon={faBookOpen}  className="fa"  />
                       </Row>
                     <Row className="title">
                        Library
                     </Row>
                </Col>
                <Col className="icon"> 
                   <Row>
                    <FontAwesomeIcon icon={faUserFriends}  className="fa"  />
                       </Row>
                    <Row className="title">
                       Groups
                     </Row>
                </Col>
                <Col className="icon"> 
                   <Row>
                    <FontAwesomeIcon icon={faUser}  className="fa"  />
                       </Row>
                     <Row className="title">
                        Profile
                     </Row>
                </Col>
            </Container>
        </div>
    );
  }
}

export default Layout;
