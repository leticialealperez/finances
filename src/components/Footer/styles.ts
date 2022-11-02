import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  by: {
    flexGrow: 1,
    fontSize: '12px',
    color: '#333',
    margin: '20px',
  },
});

export { useStyles };
