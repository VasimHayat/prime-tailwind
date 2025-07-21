module.exports = {
    // prefix: 'tw-',
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/primeng/**/*.{html,js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          'light-sky-blue': '#c5ecf9', // Adding custom light sky blue color
        },
      },
    },
    plugins: [],
  };
  