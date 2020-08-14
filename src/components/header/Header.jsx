import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { LocaleContext } from '../local/locale';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { white } from 'material-ui/styles/colors';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      color: white,
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      color: white,
      backgroundColor: '#212121',
      marginTop: theme.spacing(2),
    },
    icon: {
      color: white,
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  const context = useContext(LocaleContext);

  return (
    <AppBar>
      <Toolbar>
        <FormControl className={classes.formControl}>
          <Select
            value={context.locale}
            className={classes.selectEmpty}
            onChange={context.selectLang}
            classes={{
              icon: classes.icon,
            }}
            variant="standard"
            inputProps={{ 'aria-label': 'Without label' }}>
            <MenuItem value="ru">
              <FormattedMessage id="ru" defaultMessage="Русский" />
            </MenuItem>
            <MenuItem value="en">
              <FormattedMessage id="en" defaultMessage="English" />
            </MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
