import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";

class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
      <div>
        <Menu text size = 'massive'>
          <Container>
          <Menu.Item>
          <Image src='https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-AS-Logo-Design-by-Greenlines-Studios.jpg' avatar />
        </Menu.Item>
            <Link to="/">
              <Menu.Item style={{ padding: '1.1em 1em 0em 1em' }} header>Home</Menu.Item>
            </Link>
            <Link to="/products">
              <Menu.Item style={{ padding: '1.1em 1em 0em 1em' }} header >Order now</Menu.Item>
            </Link>
            {authenticated ? (
              <React.Fragment>

                  <Link to="/profile">
                    <Menu.Item style={{ padding: '1.1em 1em 0em 1em' }} header>Account</Menu.Item>
                  </Link>
                  <Menu.Menu position="right">
                  <Dropdown
                  style={{ padding: '0.2em 1em 0em 1em' }}
                    icon="cart"
                    loading={loading}
                    text={`${cart !== null ? cart.order_items.length : 0}`}
                    pointing
                    className="link item"
                  >
                    <Dropdown.Menu >
                      {cart !== null ? (
                        <React.Fragment>
                          {cart.order_items.map(order_item => {
                            return (
                              <Dropdown.Item key={order_item.id}>
                                {order_item.quantity} x {order_item.item.title}
                              </Dropdown.Item>
                            );
                          })}
                          {cart.order_items.length < 1 ? (
                            <Dropdown.Item>No items in your cart</Dropdown.Item>
                          ) : null}
                          <Dropdown.Divider />

                          <Dropdown.Item
                            icon="arrow right"
                            text="Checkout"
                            onClick={() =>
                              this.props.history.push("/order-summary")
                            }
                          />
                        </React.Fragment>
                      ) : (
                        <Dropdown.Item>Your cart is empty</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item style={{ padding: '0.2em 1em 0em 1em' }} header onClick={() => this.props.logout()}>
                    Logout
                  </Menu.Item>
                </Menu.Menu>
              </React.Fragment>
            ) : (
              <Menu.Menu style={{ padding: '0.7em 1em 0em 1em' }} position="right">
                <Link to="/login">
                  <Menu.Item header>Login</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Signup</Menu.Item>
                </Link>
              </Menu.Menu>
            )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column textAlign="center">
                <Header inverted as="h3" content="made by Alibi Nassipkali and Sanzhar Ashimbay" />
                <p>Especially for Networking and Security
                </p>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
