import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Context } from '../local/locale';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      color: white,
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      color: white,
      marginTop: theme.spacing(2),
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  const context = useContext(Context);
  return (
    <AppBar>
      <Toolbar>
        <FormControl className={classes.formControl}>
          <Select
            value={context.locale}
            className={classes.selectEmpty}
            onChange={context.selectLang}
            inputProps={{ 'aria-label': 'Without label' }}>
            <MenuItem value="ru-RU">Русский</MenuItem>
            <MenuItem value="en-US">English</MenuItem>
          </Select>
        </FormControl>
        {/* <select value={context.locale} onChange={context.selectLang}>
          <option value="en-US">English</option>
          <option value="ru-RU">Русский</option>
        </select> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
