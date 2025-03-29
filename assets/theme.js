import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const theme = definePreset(Aura, {
  semantic:   {
    primary:     {
      50:  '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0:   '#ffffff',
          50:  '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark:  {
        surface: {
          0:   '#ffffff',
          50:  '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
    },
  },
  components: {
    button:   {
      sm: {
        padding: {
          y: '0.25rem',
        },
      },
    },
    chip:     {
      border:      {
        radius: '8px',
      },
      padding:     {
        x: '0.5rem',
        y: '0.25rem',
      },
      colorScheme: {
        dark: {
          background: 'rgba(255, 255, 255, 0.1)',
          color:      '{slate.400}',
          remove:     {
            icon: {
              color: '{slate.600}',
            },
          },
        },
      },
    },
    divider:  {
      horizontal: {
        margin: '0.5rem',
      },
    },
    splitter: {
      colorScheme: {
        dark: {
          background: 'transparent',
          border:     'transparent',
          gutter:     {
            background: 'transparent',
          },
          color: '{slate.300}',
        },
      },
    },
    tabs:     {
      tab:         {
        padding: '0.25rem',
      },
      tabpanels:   {
        padding: '0.5rem',
      },
      colorScheme: {
        tablist:  {
          background: 'transparent',
        },
        tabpanel: {
          background: 'transparent',
        },
      },
    },
    toolbar:  {
      padding:     '0 0.25rem',
      colorScheme: {
        dark: {
          background: 'transparent',
        },
      },
    },
  },
});
