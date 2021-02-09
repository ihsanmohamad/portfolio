module.exports = {
  purge: [
    './index.md',
    './posts/*.md',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#181d21",
      },
      typography: (theme) =>  ({
        dark: {
          css: {
            a: {
              color: '#d1d5db',
              
            },
            'a:hover': {
              color: '#f3f4f6',
            },
            'h1, h2, h3, td, th': {
              color: '#f3f4f6'
            },
            
            'a code': {
              color: '#f3f4f6',
            },
            code: {
              color: '#f3f4f6',
              backgroundColor: '#374151'
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#f3f4f6',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#42b983',
              backgroundColor: '#374151'
            },
            hr: {
              borderColor: '#1F2937',
            },
            strong: {
              color: '#ffffff'
            }
          },
        },
        DEFAULT: {
          css: {
            
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#000000',
              borderLeftWidth: '0.5rem',
              borderLeftColor: '#42b983'
            },
            
          },
        }
      }),
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
