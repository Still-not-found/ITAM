// CreateAsset.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const CreateAsset = () => {
  const classes = useStyles();

  const [assetData, setAssetData] = useState({
    assetName: '',
    assetType: '',
    purchaseDate: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the asset data
    console.log('Asset Data:', assetData);
    // Reset form after submission
    setAssetData({
      assetName: '',
      assetType: '',
      purchaseDate: '',
      // Reset other fields as needed
    });
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Create IT Asset
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Asset Name"
          variant="outlined"
          name="assetName"
          value={assetData.assetName}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.textField}
          label="Asset Type"
          variant="outlined"
          name="assetType"
          value={assetData.assetType}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.textField}
          label="Purchase Date"
          type="date"
          variant="outlined"
          name="purchaseDate"
          value={assetData.purchaseDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        {/* Add more fields as needed */}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Create Asset
        </Button>
      </form>
    </Container>
  );
};

export default CreateAsset;
