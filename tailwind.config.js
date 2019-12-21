module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#2B6CB0',
        secondary: '#4299E1',
        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          tertiary: 'var(--bg-background-tertiary)',
          form: 'var(--bg-background-form)',
        },

        copy: {
          primary: 'var(--text-copy-primary)',
          secondary: 'var(--text-copy-hover)',
        },

        'border-color': {
          primary: 'var(--border-border-color-primary)',
        },
      }
    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}