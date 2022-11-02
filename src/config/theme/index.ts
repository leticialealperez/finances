import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: {
        // light: será calculada com base em palette.primary.main,
        main: '#2b385b',
        // dark: será calculada com base em palette.primary.main,
        // contrastText: será calculada para contrastar com palette.primary.main
      },
      secondary: {
        main: '#e16e0e',
      },
      contrastThreshold: 3,
      // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
      // dois índices dentro de sua paleta tonal.
      // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontSize: 14,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            'html, body': {
              WebkitFontSmoothing: 'auto',
              backgroundColor: '#f7f7f7',
              color: '#2b385b',
            },
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            bottom: '20px',
            right: '30px',
            position: 'fixed',
          },
        },
      },
    },
  },
  ptBR
);

export { theme };
