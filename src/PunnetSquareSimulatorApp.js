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


export default function PunnetSquareSimulatorApp() {
  const classes = useStyles();
  // Create state and lookup table for each type of population member
  const populationVariant = {
    hetero: {
      title: 'Frequency of Heterozygous',
    },
    homoD: {
      title: 'Frequency of Homozygous Dominant',
    },
    homoR: {
      title: 'Frequency of Homozygous Recessive',
    },
  };

  function safeguard(inputFn) {
    return (value) => {
      // If the value is a number, pass to the inputFN
      if (!Number.isNaN(value)) {
        return inputFn(value);
      }
      // Else return nothing
      return undefined;
    };
  }

  const [hetero, setHetero] = React.useState(33);
  populationVariant.hetero.value = hetero;
  populationVariant.hetero.setValue = safeguard(setHetero);
  const [homoD, setHomoD] = React.useState(33);
  populationVariant.homoD.value = homoD;
  populationVariant.homoD.setValue = safeguard(setHomoD);
  const [homoR, setHomoR] = React.useState(34);
  populationVariant.homoR.value = homoR;
  populationVariant.homoR.setValue = safeguard(setHomoR);
  // Create state for the number of runs
  const [generations, setGenerations] = useState(100);
  // Create a place to store the resulting data
  const [conditionData, setConditionData] = useState({});

  // Disable submit unless all percentages add to 100
  function isSubmitDisabled() {
    return !((hetero + homoD + homoR) === 100);
  }

  function buttonText() {
    if (!isSubmitDisabled()) {
      return 'Submit';
    }
    return 'Ensure Geneotype Percents Add to 100';
  }

  async function runSim() {
    const params = {
      hetero,
      homoD,
      homoR,
      generations,
    };
    const host = 'http://127.0.0.1:5000/';
    const path = 'runSim';
    const data = await axios.get(host + path, {
      params,
    });
    setConditionData(data.data);
  }

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.gridContainer}>
        <Typography variant="h3">
          Punnet Square Simulator
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Decide what our population&apos;s initial genotypes frequencies are
          and how many different generations to create to see what happens over time
        </Typography>
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
            data={conditionData}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
