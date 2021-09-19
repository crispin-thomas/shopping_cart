import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { data } from "../data";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartAction } from "../redux/action/index";

const Products = () => {
  const dispatch = useDispatch();

  // addToCart dispatcher is used to add the items in the cart.
  const { addToCart } = bindActionCreators(cartAction, dispatch);

  return (
    <div
      style={{
        paddingTop: "40px",
        textAlign: "center",
        paddingBottom: "40px",
      }}
    >
      {/* Data is being fetched using the map function */}
      <Container>
        <Row className="g-4">
          {data.map((info, idx) => (
            <Col sm={12} md={6} lg={4} xl={3} key={idx}>
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={info.img} alt="" />
                <Card.Body>
                  <Card.Title>{info.title}</Card.Title>
                  <Card.Text>{info.body}</Card.Text>
                  <Button
                    variant="outline-dark"
                    onClick={() => addToCart(data[info.id - 1])}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/*  */}
    </div>
  );
};

export default Products;
