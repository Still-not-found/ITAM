import { useState, useEffect, forwardRef } from "react";
// @mui ------------------------------------------------------
import {
  Link,
  Typography,
  Stack,
  Button,
  Grid,
  TextField,
  Box,
  Breadcrumbs,
  styled,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
// @mui-icons ------------------------------------------------
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
// Components -----------------------------------------------
import { Helmet } from "react-helmet-async";

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.success.darker,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditComputer(props) {
  const { optionState, handleClickNewComputer, DB_URL, loggedInUserId } = props;
  const [countryData, setCountryData] = useState({
    country_name: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (field, value) => {
    setCountryData((pre) => {
      return { ...pre, ...{ [field]: value } };
    });
    setValidationErrors({});
  };

  const handleClose = (event, reason) => {
    if (reason && (reason == "backdropClick" || reason == "escapeKeyDown"))
      return;
      handleClickNewComputer();
  };

  const validateComputerData=()=>{
    let errors={};

    if(!Boolean(computerData.country_name))
      errors.country_name="Computer Name is required.";

    return errors;
  }

  const handleSubmitComputer =(event)=> {
        // console.log('It worked');
        const errors=validateComputerData();
        if (Object.keys(errors).length > 0) {
          setValidationErrors(errors);
          return;
        }
        console.log(countryData);
  }

  return (
    <>
      <Helmet>
        <title>Computer Create | ITAM</title>
      </Helmet>

      <Dialog
        fullWidth
        maxWidth="sm"
        open={optionState.canCreate}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create a new Computer"}</DialogTitle>
        <DialogContent>
          <Box mt={1} sx={{ flexGrow: 1 }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={5}
              columns={{ xs: 4, sm: 12, md: 12 }}
            >
              <Grid item xs={4} sm={12} md={12}>
                <TextField
                  id="computer_name"
                  size="small"
                  fullWidth
                  required
                  label="Computer Name"
                  value={computerData.computer_name}
                  onChange={(event) => {
                    handleInputChange("computer_name", event.target.value);
                  }}
                  error={Boolean(validationErrors.computer_name)}
                  helperText={validationErrors.computer_name}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <SubmitButton color="success" variant="contained" onClick={handleSubmitComputer}>
            Save
          </SubmitButton>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
