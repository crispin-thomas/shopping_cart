import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartAction } from "../redux/action";

const CartComp = () => {
  var Tprice = 0;
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();

  items.forEach((element) => {
    Tprice = Tprice + element.price;
  });

  //The remove cart dispatcher is used to remove the elements from the cart.
  const { removeFromCart } = bindActionCreators(cartAction, dispatch);

  return (
    <div style={{ paddingTop: "40px" }}>
      <Container>
        <h1 style={{ paddingBottom: "20px" }}>CART ITEMS</h1>
        {/* First check if the cart is empty */}
        {items.length === 0 ? (
          <h3>Your Cart is Empty </h3>
        ) : (
          <Row xs={1} md={2} lg={2} className="g-4">
            {/* This is used to display the items in the cart */}
            {items.map((element, idx) => (
              <Col key={idx}>
                <Card style={{ width: "540px" }}>
                  <Row>
                    <Col>
                      <Card.Img src={element.img} />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>{element.body}</Card.Text>
                        <Card.Text>Price : {element.price}</Card.Text>
                        <Button
                          variant="outline-dark"
                          onClick={() => removeFromCart(element.id)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {/*  */}
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <h3>Total Items : {items.length}</h3>
          </Col>
          <Col>
            <h3>Total Price : {Tprice}</h3>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "center",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Button
            variant="outline-dark"
            onClick={() => alert("Order Successfully Placed")}
          >
            Place Order
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CartComp;
