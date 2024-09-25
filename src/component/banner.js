import { useState, useEffect } from "react";
import { Container, Row , Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-icons";
import headerimg from '../images/headerimg.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer"];
    const period = 2000;

    
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


    return(
        <section className="banner" id="indx">
            
                <Container>
                    <Row className="section1">
                        <Col xs={12} md={6} lg={7}>
                        <span className="tagline"> Welcome All in my protofelo</span>
                        <h1>{`Hi! I'm Hend yasser Mohammed ,software engineer`} <span className="txt-rotate" dataPeriod="1000"
                         data-rotate='[ "Web Developer", "Web Designer"]'>
                            <span className="wrap"></span>{text}</span></h1>
                            <p> HEllo Everyone , Iam graduated from faculty of Computer Science
                                and information system
                            </p>
                          <button onClick={() => console.log('connect')}>
                            Let’s Connect... </button>
                        </Col>

                        <Col xs={12} md={6} lg={5}>
                        <img src={headerimg} alt=""/>

                        </Col>
                    </Row>
                </Container>

        </section>
    )
}