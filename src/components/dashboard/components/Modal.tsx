import { FC, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextareaAutosize, TextField } from "@mui/material";
import Container from '@mui/material/Container';

const TransitionsModal: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [method, setMethod] = useState<string>('Mail');

  const handleChange = (event: SelectChangeEvent) => {
    setMethod(event.target.value as string);
  };

  return (
    <div>
      <Button variant="outlined" color="success" onClick={handleOpen}>Massage</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className="patient_modal">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Send message to user
            </Typography>
            <FormControl fullWidth className="patient_modal_form-control">
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
             <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
              <InputLabel id="demo-simple-select-label">Methods</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className="patient_modal_select"
                    value={method}
                    label="Methods"
                    onChange={handleChange}>
                    <MenuItem value={'Mail'}>Mail</MenuItem>
                    <MenuItem value={'SMS'}>SMS</MenuItem>
                    <MenuItem value={'Whatsapp'}>Whatsapp</MenuItem>
                </Select>
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField id="outlined-basic" label="Label" variant="outlined" className="patient_modal_textfield"/>
              </Grid>
            </Grid>
            <Grid item md={12}>
            <TextareaAutosize
                className="patient_modal_textarea"
                maxRows={110}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                />
            </Grid>
          </Container>
           
            </FormControl>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            </Typography>
            <Container maxWidth="lg">
              <Grid container >
                <Grid item md={6}>
                  <Button variant="outlined" color="error" className="patient_modal_btn-stl" onClick={handleClose}>Close</Button>
                </Grid>
                <Grid item md={6} className="patient_modal_button">
                  <Button variant="outlined" color="success" className="patient_modal_btn-stl">Send</Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default TransitionsModal;