/** @jsx jsx */
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Row, Container, Col, Badge, Typography } from 'reus'
import { css, jsx } from '@emotion/core'

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
                asdf
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
              <Typography tag="h1" type="headline-super">
                Headline Super
              </Typography>
              <Typography font="Menlo" color="#fff" tag="h1" type="headline-elevated">
                Headline Elevated
              </Typography>
                className,
                <Typography 
                  tag="h2" 
                  type="headline"
                  color={css`color: blue;`}
                  align="center">Simple Human Resource system : Database, Payroll, Lending. We have it all!</Typography>
            </Col>
            <Col style={{background: '#666'}}>
              left
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default hot(module)(App)