const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

module.exports = withConfig({
	reactStrictMode: true,
	env: {
		COVALENTHQ_API_KEY:'ckey_7fdf2f00932945738fa0e8116a1',
	  },
});
