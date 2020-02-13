import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const img = {
    'max-width': '35vw'
}

const Gallery = () => {
    return (
        <div id="gallery-container"> 
            <h1 id="about__title">Gallery</h1>
            <Container>
                <Row>
                    <Col>
                        <Image style={img} src="img/fino-bmw2.jpeg" fluid thumbnail/>
                    </Col>
                    <Col>
                        <Image style={img} src="img/app-img.jpg" fluid thumbnail/>
                    </Col>
                </Row>
                <Row style={{'paddingTop': '1rem'}}>
                    <Col>
                        <Image style={img} src="img/fino-bmw1.jpeg" fluid thumbnail/>
                    </Col>
                    <Col>
                        <Image style={img} src="img/fino-cut1.jpeg" fluid thumbnail/>
                    </Col>
                </Row>
                <Row style={{'paddingTop': '1rem'}}>
                    <Col>
                        <Image style={img} src="img/fino-cut2.jpeg" fluid thumbnail/>
                    </Col>
                    <Col>
                        <Image style={img} src="img/fino-cut3.jpeg" fluid thumbnail/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gallery;