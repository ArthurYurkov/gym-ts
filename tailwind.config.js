/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'grey-20': '#f8f4eb',
                'grey-50': '#efe6e6',
                'gray-100': '#dfcccc',
                'gray-500': '#5e0000',
                'primary-100': '#ffe1e0',
                'primary-300': '#ffa6a3',
                'primary-500': '#ff6b66',
                'secondary-400': '#ffcd58',
                'secondary-500': '#ffc132',
            },
        },
    },
    plugins: [],
};
