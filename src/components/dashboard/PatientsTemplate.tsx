import React, { useEffect, useState } from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './Header';
import AccordionPatients from './components/AccordionPatients';
import { usePatients } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const mdTheme = createTheme();

const PatientsTemplate: React.FC = () => {
  const {patients, error, load} = useTypedSelector(state => state.patients);
  const {getPatients} = usePatients();
  useEffect(() => {
    getPatients()
  }, [])
    return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header name='Patients List'/>
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
          
              {/* Recent Orders */}
              <Grid item xs={12}>
                <AccordionPatients header="Patients" patients={patients} load={load}/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default PatientsTemplate;