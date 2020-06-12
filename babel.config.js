const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const SCSS_DIR = path.join(SRC_DIR, 'assets', 'scss');

const SASS_AUTO_IMPORTS = `
@import "${path.join(SCSS_DIR, '_variables.scss')}";
`;

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
