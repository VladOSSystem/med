import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from './Header';

const mdTheme = createTheme();

const MedicalTemplateDetail: React.FC = () => {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header name='Medical Detail'/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={7}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={6} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12} md={12} lg={7}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 376 }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>

                <Paper
                  sx={{
                    p: 2,
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MedicalTemplateDetail;