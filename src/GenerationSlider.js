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
});


export default function GenerationSlider(props) {
  const classes = useStyles();
  const {
    value, setValue, type, title, min, max, step,
  } = props;
  // Some constants for scaling values from slider values 0-100 to relevant values
  const rate = ((max - min) / 100);
  const bias = min;
  function scale(val) {
    return (val * rate) + bias;
  }
  function normalize(val) {
    return (val - bias) / rate;
  }

  const handleSliderChange = (event, newValue) => {
    setValue(scale(newValue));
  };

  function valueText(val) {
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
  console.log('GenerationSlider -> parseInt((step / (max - min)) * 100, 10)', (step / (max - min)) * 100, 10);
  console.log('GenerationSlider -> (max - min)', (max - min));
  console.log('GenerationSlider -> step', step);

  return (
    <div className={classes.root}>
      <Typography id={`${type}-slider-`} gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            defaultValue={0}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider-always"
            onChange={handleSliderChange}
            step={parseInt((step / (max - min)) * 100, 10)}
            marks={marks}
            value={normalize(value)}
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </div>
  );
}
GenerationSlider.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};
GenerationSlider.defaultProps = {
  min: 100,
  max: 1100,
  step: 100,
};
