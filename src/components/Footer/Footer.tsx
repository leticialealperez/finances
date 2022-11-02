import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { useStyles } from './styles';


const Footer: React.FC = () => {
    const theme = useTheme()
    const classes = useStyles(theme);

    return (
        <div style={classes.root}>
        <Typography variant="h6" align="center" sx={classes.by}>
            Controle de dinheiro by Growdev
        </Typography>
        </div>
    );
}

export default Footer