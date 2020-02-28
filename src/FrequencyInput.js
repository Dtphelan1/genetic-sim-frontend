import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function FrequencyInput(props) {
  const classes = useStyles();
  const {
    value, setValue, type, title, isError,
  } = props;

  const handleInputChange = (event) => {
    let newValue = Number(event.target.value);
    if (newValue > 100) {
      newValue = 100;
    } else if (newValue < 0) {
      newValue = 0;
    }

    setValue(newValue);
  };

  return (
    // <TextField
    //   className={classes.root}
    //   id={type}
    //   label={title}
    //   value={value}
    //   onChange={handleInputChange}
    //   endAdornment={<InputAdornment position="end">%</InputAdornment>}
    //   variant="filled"
    //   error={isError()}
    //   margin="dense"
    // />
    <FormControl className={classes.root}>
      <Input
        id={`${type}-frequency-standard-adornment`}
        value={value}
        onChange={handleInputChange}
        endAdornment={<InputAdornment position="end">%</InputAdornment>}
        aria-describedby={`${type}-frequency-input-helper-text`}
        error={isError()}
        inputProps={{
          'aria-label': 'frequency',
        }}
      />
      <FormHelperText id={`${type}-frequency-input-helper-text`}>{title}</FormHelperText>
    </FormControl>
  );
}
FrequencyInput.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isError: PropTypes.func.isRequired,
};
FrequencyInput.defaultProps = {
  value: 0,
};
