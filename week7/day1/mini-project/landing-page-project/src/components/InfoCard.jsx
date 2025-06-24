import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoCard({ icon, title, children, grey }) {
  return (
    <section className={`py-5 ${grey ? "bg-light" : ""}`}>
      <div className="container">
        <Row className="align-items-center g-4">
          <Col xs={12} md={2} className="text-center">
            <FontAwesomeIcon icon={icon} size="6x" className="text-danger" />
          </Col>

          <Col xs={12} md={10}>
            <h2 className="fw-bold">{title}</h2>
            <p className="mb-0">{children}</p>
          </Col>
        </Row>
      </div>
    </section>
  );
}
