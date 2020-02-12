import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const img = {
    'max-width': '45vw'
}

const Gallery = () => {
    return (
        <div id="gallery-container"> 
            <Container>
                <Row>
                    <Col>
                        <Image style={img} src="img/fino-bmw2.jpeg" thumbnail/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gallery;