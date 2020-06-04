import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import propTypes  from 'prop-types';

const theme = createMuiTheme({
    palette: {
        primary: purple,
    },
    status: {
        danger: 'orange',
    },
});

export default function Theme(props) {

    return <ThemeProvider theme={theme}>
              {props.children}
           </ThemeProvider>
}

Theme.propTypes  ={
    children: propTypes.any.isRequired,
};
