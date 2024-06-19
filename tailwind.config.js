import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				paper: "url('./src/lib/images/bg.png')"
			}
		}
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			{
				main: {
					primary: '#282828',
					'primary-content': '#ffffff',
					secondary: '#4b5563',
					accent: '#fb7185',
					neutral: '#a8a29e',
					'base-100': '#fafafa',
					info: '#9ca3af',
					success: '#a3e635',
					warning: '#fbbf24',
					error: '#db2777'
				}
			}
		]
	}
};
