import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const backgroundStyle = {
  backgroundImage: `url(/images/header.png)`,
  backgroundSize: 'cover',
};

const HomePage = () => {
  return (
    <Container
      fluid
      style={backgroundStyle}
      className="d-flex flex-column align-items-center justify-content-center vh-100"
    >
      <h1>Color Me Hues</h1>
      <h2>Unlock your emotional world</h2>
      <Button>Shop</Button>
    </Container>
  );
};

export default HomePage;
