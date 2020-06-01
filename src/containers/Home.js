import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Statistic
} from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
 const ImageExampleFluid = () => (
   <Image src='https://www.gpstracker.at/wp-content/uploads/2019/03/How-GPS-Tracking-Can-Benefit-Delivery-Services.jpg' fluid />
 )

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='AS DELIVERY'
      inverted
      style={{

        fontSize: mobile ? '4em' : '6em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2.5em',
      }}
    />
    <Header
      as='h2'
      content='So fast so hot'
      inverted
      style={{
        fontSize: mobile ? '2em' : '2.5em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Link to="/products">
    <Button primary size='huge'>
      Order now‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎
      <Icon name='food' />
    </Button>
    </Link>

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        <Segment
                  inverted
                  textAlign='center'
                  style={{ minHeight: 700, padding: '1em 0em',         backgroundImage: `url(${"https://jooinn.com/images/italian-food-background-1.jpg"})`,
                          backgroundSize: 'cover', }}
                  vertical

                >

                  <HomepageHeading />
              </Segment>

        </Visibility>

        {children}
      </Responsive>
    )
  }
}


DesktopContainer.propTypes = {
  children: PropTypes.node,
}





const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' style={{ fontSize: '4em' }}>
              We have everything that you like to eat
            </Header>
            <p style={{ fontSize: '2em' }}>
              From pizza to burger and fries that you crave or the juiciest doners.
              Order from us the largest assortment of delicious food.
            </p>

          </Grid.Column>
          <Grid.Column floated='right' width={8}>
            <Image bordered rounded size='huge' src='https://cdn.searchenginejournal.com/wp-content/uploads/2017/10/5BABBB4B-394F-49BE-88B2-B2F11F3F0F9E.jpeg' />
          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
        <Grid.Column floated='right' width={8}>
          <Image bordered rounded size='huge' src='https://i.pinimg.com/originals/08/53/d4/0853d41c51b9d3caf8828520818ee64a.jpg' />
        </Grid.Column>
          <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '4em' }}>
            No time to cook?
            We have options
          </Header>
          <p style={{ fontSize: '2em' }}>
            We will deliver food directly to your door.
            Or try picking up on your way home.
            Only we have the fastest delivery in the city.
          </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>



    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '4em' }}>
          About us
        </Header>
        <p style={{ fontSize: '2em' }}>
We are a start-up food delivery company, however in a short time we managed to gather a large number of customers and get more positive reviews. And we do not stop there and strive for great heights.
        </p>

      </Container>
    </Segment>
<Segment style={{ padding: '8em 0em' }} vertical>
<Container text>
    <Statistic.Group>
    <Statistic>
      <Statistic.Value>+100</Statistic.Value>
      <Statistic.Label>Restaurants</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        50,000
        <br />
        Satisfied
      </Statistic.Value>
      <Statistic.Label>clients</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='car' />
      </Statistic.Value>
      <Statistic.Label>Fast delivery</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Label>We work until</Statistic.Label>
      <Statistic.Value>
        <Icon name = 'time'/>
        3:00
      </Statistic.Value>

    </Statistic>
  </Statistic.Group>
</Container>
</Segment>

  </ResponsiveContainer>
)

export default HomepageLayout
