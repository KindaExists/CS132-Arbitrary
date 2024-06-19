import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				paper: "url('./src/lib/images/bg.png')"
			},
      colors: {
        blue: {
          DEFAULT: '#001641',
          100: '#000023',
          200: '#001641',
          300: '#233A5C',
          400: '#455C76',
          500: '#687D90',
          600: '#8A9DAA',
          700: '#ADBCC3',
          800: '#D0DADD',
          900: '#F2F5F6'
        },
        yellow: {
          DEFAULT: '#F5DF2F',
          100: '#662200',
          200: '#8C4901',
          300: '#B3780C',
          400: '#D9AB1B',
          500: '#F5DF2F',
          600: '#FFEC5D',
          700: '#FFF692',
          800: '#FFFCCE'
        },
        white: '#FFFFFF',
        gray: '#404040'
      },
      fontFamily: {
        clearsans: ['ClearSans'],
        souvenirstd: ['SouvenirStd']
      }
		}
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			{
				main: {
					primary: '#001641',
					secondary: '#f5df2f',
					accent: '#fb7185',
					neutral: '#a8a29e',
					'base-100': '#ffffff',
				}
			}
		]
	}
};
