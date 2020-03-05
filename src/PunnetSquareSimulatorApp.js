import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import DataVis from './DataVis';
import GenerationSlider from './GenerationSlider';
import './App.css';

const useStyles = makeStyles((theme) => ({
  freqInput: {
    width: 250,
  },
  gridContainer: {
    margin: theme.spacing(2),
  },
  gridElements: {
    padding: theme.spacing(2),
  },
}));

const host = 'https://genetic-simulator.herokuapp.com/';
const path = 'runOffspringSim';

export default function PunnetSquareSimulatorApp() {
  const classes = useStyles();
  // Create state and lookup table for each type of population member
  const populationVariant = {
    parentA: {
      title: 'Alleles for Parent A',
    },
    parentB: {
      title: 'Alleles for Parent B',
    },
  };

  function safeguard(inputFn) {
    return (value) => {
      // If the value is a number, pass to the inputFN
      if (value.length <= 2) {
        return inputFn(value);
      }
      // Else return nothing
      return undefined;
    };
  }

  const [parentA, setParentA] = React.useState('BB');
  populationVariant.parentA.value = parentA;
  populationVariant.parentA.setValue = safeguard(setParentA);
  const [parentB, setParentB] = React.useState('Bb');
  populationVariant.parentB.value = parentB;
  populationVariant.parentB.setValue = safeguard(setParentB);
  // Create state for the number of runs
  const [generations, setGenerations] = useState(100);
  // Create a place to store the resulting data
  const [offspringData, setOffspringData] = useState({});

  // Disable submit unless all percentages add to 100
  function isSubmitDisabled() {
    return (parentA.length !== 2 && parentB.length !== 2);
  }

  function buttonText() {
    if (!isSubmitDisabled()) {
      return 'Generate Offspring';
    }
    return 'Make sure your alleles are correct';
  }

  async function runSim() {
    const params = {
      parentA,
      parentB,
      generations,
    };
    const data = await axios.get(host + path, {
      params,
    });
    setOffspringData(data.data);
  }

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Punnet Square Simulator
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Generate a bunch of offspring and see how the population metrics match up
            with the punnett square predictions
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridElements}>
          <Typography variant="h5" gutterBottom>
            Input Parameters
          </Typography>
          <form noValidate autoComplete="off">
            {Object.keys(populationVariant).map((ty) => {
              const { title, value, setValue } = populationVariant[ty];
              return (
                <Grid item key={ty} className={classes.freqInput}>
                  <FormControl className={classes.root}>
                    <Input
                      id={`${ty}-input`}
                      value={value}
                      onChange={(event) => safeguard(setValue)(event.target.value)}
                      aria-describedby={`${ty}-input-helper-text`}
                      error={isSubmitDisabled()}
                      inputProps={{
                        'aria-label': 'frequency',
                      }}
                    />
                    <FormHelperText id={`${ty}-input-helper-text`}>{title}</FormHelperText>
                  </FormControl>
                </Grid>
              );
            })}
            <GenerationSlider
              type="generations"
              title="Number of Generations"
              value={generations}
              setValue={setGenerations}
            />
            <Button variant="contained" color="primary" disabled={isSubmitDisabled()} onClick={runSim}>
              {buttonText()}
            </Button>
          </form>
        </Grid>
        <Grid item xs={6} className={classes.gridElements}>
          <Typography variant="h5" gutterBottom>
            Output Data
          </Typography>
          <DataVis
            data={offspringData}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
