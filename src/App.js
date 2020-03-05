import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GenSimAppBar from './GenSimAppBar';
import GenotypeSimulatorApp from './GenotypeSimulatorApp';
import PunnetSquareSimulatorApp from './PunnetSquareSimulatorApp';
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

const AppLookup = {
  GenotypeSimulator: GenotypeSimulatorApp,
  PunnetSquareSimulator: PunnetSquareSimulatorApp,
};

const displayText = {
  GenotypeSimulator: 'Genotype Simulator',
  PunnetSquareSimulator: 'Punnet Square Simulator',
};

function App() {
  const [currentApp, setCurrentApp] = useState('GenotypeSimulator');

  const CurrentApp = AppLookup[currentApp];
  return (
    <div className="App">
      <CssBaseline />
      <GenSimAppBar
        apps={Object.keys(AppLookup)}
        displayText={displayText}
        setCurrentApp={setCurrentApp}
      />
      <CurrentApp />
    </div>
  );
}

export default App;
