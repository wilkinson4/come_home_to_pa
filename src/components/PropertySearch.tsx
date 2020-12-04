import React from 'react';
import {TextField, Theme, Typography, createStyles, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    propertySearchHeader: {
      textAlign: 'center',
      margin: theme.spacing(2),
      color: theme.palette.primary.main,
    },
  }),
);

export default () => {
  const classes = useStyles()
  return (
    <section>
      <Typography className={classes.propertySearchHeader} variant='h5' gutterBottom>
        Start Your Property Search
      </Typography>
      <div className={classes.inputGroup}>
        <TextField id='city-input' label='Enter a city' />
        <Typography>or</Typography>
        <TextField id='zip-code-input' label='Enter a zip code' />
      </div>
    </section>
  )
}
