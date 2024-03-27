import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

const Cards = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', py: '10rem', px: 4, bgcolor: 'white' }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="black" sx={{ p: 5 }}>
          Why-us?
        </Typography>
        <Grid container justifyContent="center" spacing={6} maxWidth="1240px" mx="auto">
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                p: 4,
                my: 4,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transitionDuration: '300ms',
                },
              }}
            >
              <Typography variant="h5" align="center" fontWeight="bold" sx={{ py: 8 }}>
                Reliable
              </Typography>
              <Box >
                <Typography variant="body1" sx={{ py: 6, borderBottom: '1px solid', mx: 2, mt: 4 }}>
                  We believe in building and maintaining long term relationships with all our clients.
                </Typography>
              </Box>

            </Box>
            </Grid>
            <Grid item xs={12} md={3}>
            <Box
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                p: 4,
                my: 4,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transitionDuration: '300ms',
                },
              }}
            >
              <Typography variant="h5" align="center" fontWeight="bold" sx={{ py: 8 }}>
              Solutions
              </Typography>
              <Box >
                <Typography variant="body1" sx={{ py: 6, borderBottom: '1px solid', mx: 2, mt: 4 }}>
                We endeavour to offer best solutions to acquire your maximum satisfaction
                </Typography>
              </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={3}>
            <Box
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                p: 4,
                my: 4,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transitionDuration: '300ms',
                },
              }}
            >
              <Typography variant="h5" align="center" fontWeight="bold" sx={{ py: 8 }}>
              Affordable
              </Typography>
              <Box >
                <Typography variant="body1" sx={{ py: 7.5, borderBottom: '1px solid', mx: 2, mt: 4 }}>
                We provide best plus affordable services to our customers.

                </Typography>
              </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={3}>
            <Box
              sx={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                p: 4,
                my: 4,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transitionDuration: '300ms',
                },
              }}
            >
              <Typography variant="h5" align="center" fontWeight="bold" sx={{ py: 8 }}>
              Experience
              </Typography>
              <Box >
                <Typography variant="body1" sx={{ py: 1.5, borderBottom: '1px solid', mx: 2, mt: 4 }}>
                We have diverse team working in trending technologies like Artificial Intelligence, Deep learning, 3D modelling, UI/UX, Web development, etc.

                </Typography>
              </Box>
            </Box>
            
          </Grid>
          {/* Repeat the above Grid item for the other three cards */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Cards;
