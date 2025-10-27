import '@mui/material/Grid';

declare module '@mui/material/Grid' {
  interface GridProps {
    xs?: boolean | number;
    sm?: boolean | number;
    md?: boolean | number;
    lg?: boolean | number;
    xl?: boolean | number;
  }
}
