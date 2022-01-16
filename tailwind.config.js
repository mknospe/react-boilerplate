module.exports = {
  mode: 'jit',
  content: ['./src/*.{html,js}', './src/modules/**/*.{html,js}'],
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
