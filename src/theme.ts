import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    50: '#EBF5FF',
    100: '#E1EFFE',
    200: '#C3DAFE',
    300: '#A3BFFA',
    400: '#7F9CF5',
    500: '#2563EB', // Primary blue
    600: '#3182CE',
    700: '#2C5282',
    800: '#2A4365',
    900: '#1A365D',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        padding: 0,
        margin: 0,
        width: '100%',
        minWidth: '100%',
        backgroundColor: 'white',
      },
      '.chakra-ui-light': {
        padding: 0,
        margin: 0,
      },
      '.chakra-ui-dark': {
        padding: 0,
        margin: 0,
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: '7xl',
        px: { base: 4, md: 8 },
      },
    },
  },
});

export default theme;
