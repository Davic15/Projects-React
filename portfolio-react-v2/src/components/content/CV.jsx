import React from 'react'
import { Col, Row } from "react-bootstrap";
import './CV.css';

export const CV = () => {
    return (
        <Col lg={12}>
        <div className='download-container wow slideInUp'>
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Download my Resume<br></br>to see more details about me</h3>
            </Col>
            <Col md={6} xl={7}>
                <div className='download-container-file'>
                    <a href='../../assets/files/Franklin_Resume_v2.pdf' download>
                        <button type='button'>Download</button>
                    </a>
                </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
}
