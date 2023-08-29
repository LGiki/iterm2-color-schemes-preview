import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'macos-button': 'linear-gradient(180deg, #4d8ff7 0%, #3478f6 100%)',
            },
            boxShadow: {
                'macos-button': '0px 0.5px 1px rgba(0, 0, 0, 0.5), inset 0px 0.5px 0px rgba(255, 255, 255, 0.25)',
            },
            keyframes: {
                'blink': {
                    '0%, 100%': {'opacity': '1'},
                    '50%': {'opacity': '0'},
                }
            },
            animation: {
                'blink': 'blink 1s infinite',
            }
        },
    },
    plugins: [],
}
export default config
