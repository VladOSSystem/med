import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarsIcon from '@mui/icons-material/Stars';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const PatientInfo = () => {
  return (
    <Card sx={{ maxWidth: 345 }} className="patient-info">
      <CardMedia
        component="img"
        height="250"
        image="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="patient-info_creds">
            Giorno Giovanna
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className="patient-info_creds">
            Italy
        </Typography>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className="patient-info_icon">
                        <MessageIcon/>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="patient-info_icon">
                        <CalendarMonthIcon/>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="patient-info_icon">
                        <StarsIcon/>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="patient-info_icon">
                        <MoreHorizIcon/>
                    </div>
                </Grid>
            </Grid>
         </Container>
         <Divider/>
         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className="patient-info_icon">
                        <EmailIcon/> 
                        <a href="mailto:test@gmail.com">test@gmail.com</a>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="patient-info_icon">
                        <PhoneInTalkIcon/>
                        <a href="tel:+3963452374256">+3963452374256</a>
                    </div>
                </Grid>
            </Grid>
         </Container>
         <Divider/>
         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{maxHeight: '300px', overflow: 'auto'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <div className="patient-info_desc">
                        <h3>Allergie</h3>
                        <p>Non hoi aggiunto alcuna allergia</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="patient-info_desc">
                        <h3>Commenti</h3>
                        <p>Aggiungi commento</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="patient-info_desc">
                        <h3>Commenti</h3>
                        <p>Aggiungi commento</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="patient-info_desc">
                        <h3>Commenti</h3>
                        <p>Aggiungi commento</p>
                    </div>
                </Grid>
            </Grid>
         </Container>
       
      </CardContent>
    </Card>
  );
}
export default PatientInfo