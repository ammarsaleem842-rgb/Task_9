import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React + Material UI
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your project is set up and ready to go!
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Hello World
        </Button>
      </Box>
    </Container>
  );
}

export default App;
