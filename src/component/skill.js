import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useState, useEffect } from "react";
import { Container, Row , Col } from "react-bootstrap";
import img4 from "../images/img4.svg";
import img5 from "../images/img5.svg";
import img6 from "../images/img6.svg";


export const Skill= () =>{
    const responsive = {
       
        laptop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
   
    }
    return(
        <section className='skill' id="section2">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>You can see my all skills here</p>

                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={img4} />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={img5}  />
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                                <img src={img6} />
                                <h5>Frontend Development</h5>
                            </div>
                           
                        </Carousel>
                        

                    </div>



                    </Col>

                </Row>
            </Container>

        </section>
    )
}
