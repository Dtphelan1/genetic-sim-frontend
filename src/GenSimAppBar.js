import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function GenSimAppBar(props) {
  const classes = useStyles();
  const { apps, displayText, setCurrentApp } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SimGen
          </Typography>
          {apps.map((app) => (
            <Button key={app} color="inherit" onClick={() => setCurrentApp(app)}>{displayText[app]}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}

GenSimAppBar.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.string).isRequired,
  displayText: PropTypes.objectOf(PropTypes.string).isRequired,
  setCurrentApp: PropTypes.func.isRequired,
};
