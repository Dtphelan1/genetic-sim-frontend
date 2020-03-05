import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

// Some constants for scaling values from slider values 0-100 to relevant values
const min = 100;
const max = 500;
const step = 10;
const rate = ((max - min) / 100);
const bias = min;
function scale(val) {
  return (val * rate) + bias;
}
function normalize(val) {
  return (val - bias) / rate;
}

export default function FrequencySlider(props) {
  const classes = useStyles();
  const { value, setValue, type, title } = props;

  const handleSliderChange = (event, newValue) => {
    setValue(scale(newValue));
  };

  function valuetext(val) {
    return `${scale(val)} Generations`;
  }

  function valueLabelFormat(val) {
    return `${scale(val)}`;
  }

  const marks = [
    {
      value: 0,
      label: `${min} Generations`,
    },
    {
      value: 100,
      label: `${max} Generations`,
    },
  ];

  return (
    <div className={classes.root}>
      <Typography id={`${type}-slider-`} gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            onChange={handleSliderChange}
            step={step}
            marks={marks}
            value={normalize(value)}
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay="on"
          />
        </Grid>
      </Grid>
    </div>
  );
}
FrequencySlider.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
