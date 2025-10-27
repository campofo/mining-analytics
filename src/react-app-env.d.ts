/// <reference types="react-scripts" />

declare module '@mui/material/Grid' {
  interface GridProps {
    xs?: boolean | 'auto' | number;
    sm?: boolean | 'auto' | number;
    md?: boolean | 'auto' | number;
    lg?: boolean | 'auto' | number;
    xl?: boolean | 'auto' | number;
    item?: boolean;
  }
}
