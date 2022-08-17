import classes from "./bread.module.css";
import bg from "/assets/images/bg/22.jpg";
import { Container, Row, Col } from "reactstrap";
export default function Bread({ title, subtitle }) {
  return (
    <section
      className={classes.bg1 + " " + classes.pageTitle}
      style={{ background: `url(${bg})` }}
    >
      <div className={classes.overlay}></div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <span className="text-white">{subtitle}</span>
              <h1 className="text-capitalize mb-5 text-lg text-white">
                {title}
              </h1>

              {/* <ul className="list-inline breadcumb-nav">
                <li className="list-inline-item">
                  <a href="index.html" className="text-white">
                    Home
                  </a>
                </li>
                <li className="list-inline-item">
                  <span className="text-white">/</span>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white-50">
                    About Us
                  </a>
                </li>
              </ul> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
