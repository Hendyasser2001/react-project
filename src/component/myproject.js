import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./cards";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
//import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Myprojects = () => {

  const Myprojects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Iam Hend ,I live in Cairo ,this is my final project</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Myprojects.map((project, index) => {
                            return (
                              <Cards
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> My name is Hend </p> </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p></Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}