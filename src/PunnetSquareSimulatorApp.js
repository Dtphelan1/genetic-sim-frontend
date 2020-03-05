import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import GenerationSlider from './GenerationSlider';
import DataVis from './DataVis';
import FrequencyInput from './FrequencyInput';
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

const host = 'http://127.0.0.1:5000/';

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
      if (value.length < 2) {
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
    const path = 'runOffspringSim';
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
            Run experiments
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
                  <FrequencyInput
                    type={ty}
                    title={title}
                    value={value}
                    setValue={setValue}
                    isError={isSubmitDisabled}
                  />
                </Grid>
              );
            })}
            <GenerationSlider
              type="generations"
              title="Number of Generations"
              value={generations}
              step={50}
              min={100}
              max={1000}
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
