import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Video from './components/Video/Video';
import List from './components/List/List';
import CommentsList from './components/CommentsList/CommentsList';
const App = () => {
  return (
    <Container>
      <br />
      <Row>
        <Col md={8}>
          <Video />
        </Col>
        <Col md={4}>
          <List />
        </Col>
        <Col md={8}>
          <CommentsList />
        </Col>
        <Col md={4}>
          <List />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
