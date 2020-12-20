import React from 'react';
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function Hero(props) {

    const titleFont = isMobile ? "display-3 text-center" : "display-1";

    const image =   <Row className="justify-content-center">
                        { props.imgSrc != null && <img className="n-hero-image" src={props.imgSrc} alt={props.imgSrc} />}
                    </Row>

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col md={8} sm={12}>
                        <Row className="justify-content-center centered">
                            <Col className="justify-content-center">
                                { props.title && <h1 className={titleFont}>{props.title}</h1> }
                                { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                                { props.bodyText && <h3 className="lead font-weight-light">{props.bodyText}</h3> }
                            </Col>
                            { !isMobile &&
                                <Col>
                                    { image }
                                </Col>
                            }
                        </Row>
                    </Col>
                </Row>
                { isMobile && image }
            </Container>
        </Jumbotron>
    );
}

export default Hero;