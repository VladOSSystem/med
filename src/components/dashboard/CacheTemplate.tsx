import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './Header';
import RowTableCache from './components/AccordionCache';
import { useCache } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const mdTheme = createTheme();

const CacheTempate: React.FC = () => {
  const {cache, error, load} = useTypedSelector(state => state.cache);
  const {getCache} = useCache();
  useEffect(() => {
    getCache()
  }, [])
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header name='Cache'/>
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
              <Grid item xs={12}>
                {load ? (<h1>Loading</h1>) : <RowTableCache cache={cache}/>}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CacheTempate;