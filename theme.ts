import { createTheme, Title } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'OpenSans, sans-serif',
  // fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Montserrat, sans-serif' },

  components: {
    Title: {
      defaultProps: {
        c: '#414141ff'
      }
    },
    Text: {
      defaultProps: {
        c: '#414141ff'
      }
    }
  }
});
