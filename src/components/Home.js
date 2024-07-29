import React from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={props}>
      <h1>Welcome to Loan Management System</h1>
      <p>Manage your loans efficiently with our system.</p>
    </animated.div>
  );
};

export default Home;