import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Row, Container, Col, Badge } from 'reus'

class App extends Component {
  render () {
    return (
      <div>
        <Container md>
          <Row gutter={10} style={{height: 100}}>
            <Col>
              <div>
                <Badge
                  overflowCount={4}
                  style={{margin: 10}} count={19}>
                  <a>test</a>
                </Badge>
              </div>
            </Col>
            <Col>
              <div>
                asdf
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default hot(module)(App)