// src/styles/Breakpoint.ts

const breakpoints = {
  xs: "360px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

// Media queries (responsive üçün)
export const device = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
};

// Ölçü sistemləri (dizayn sistemləri üçün)
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
};

export const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  xxl: "32px",
};

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
};

export const sizes = {
  buttonHeight: {
    sm: "32px",
    md: "40px",
    lg: "48px",
  },
  container: {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
  },
};

export default breakpoints;
