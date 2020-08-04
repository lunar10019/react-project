import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#7c4dff',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#b3e5fc',
    },
  },
});

export default theme;
