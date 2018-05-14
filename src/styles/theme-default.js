import { createMuiTheme } from 'material-ui/styles';
import { blue, grey } from 'material-ui/colors';

const themeDefault = createMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue[600]
  },
  drawer: {
    width: 230,
    color: grey[900]
  },
  raisedButton: {
    primaryColor: blue[600],
  },
  stepper: {
    iconColor: 'rgb(38, 165, 238)'
  },
  fontFamily: 'Montserrat, sans-serif'
});


export default themeDefault;