import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Row, Container, Col, Badge, Typography, Button, Icon } from 'reus'
import { css } from '@emotion/core'

class App extends Component {
  render () {
    return (
      <div>
        <Container md gutter={10}>
          <Row gutter={10} css={css`height: 100px;`}>
            <Col lg={6}>
              <div>
                <Badge
                  overflowCount={4}
                  css={{margin: 10}} count={19}>
                  <a>test</a>
                </Badge>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="primary" disabled>Primary Disabled</Button>
              </div>
            </Col>
          </Row>
          <Row gutter={10} css={css`height: 100px;`}>
            <Col lg={6}>
              <div>
                <Badge
                  overflowCount={4}
                  css={{margin: 10}} count={19}>
                  <a>test</a>
                </Badge>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Button>Default</Button>
                <Button type="primary" size="large">Primary</Button>
                <Button type="danger" size="small">Danger</Button>
              </div>
            </Col>
          </Row>
          <Row gutter={33} align="center" justify="space-between">
            <Col css={theme => {
                  return css`
                    background: #fff;
                  `
                } 
              }>
              <Typography tag="h1" type="headline-standalone">
                Headline Standalone
              </Typography>
            </Col>
            <Col style={{background: '#666'}}>
              left
            </Col>
          </Row>
          <Row>
            <Col>adsfadf</Col>
            <Col>
              <Icon type="light"/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default hot(module)(App)