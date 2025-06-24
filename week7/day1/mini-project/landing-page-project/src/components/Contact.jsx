import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Contact us</h2>

        <Row className="gy-4">
          {/* details */}
          <Col md={4}>
            <p>Contact us and we will get back to you within 24 hours.</p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Company Name
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
              +256 778 800 900
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              company@gmail.com
            </p>
          </Col>

          {/* form */}
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email address"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="comment"
                  required
                />
              </Form.Group>

              <Button type="submit" variant="danger" className="w-100">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
}
