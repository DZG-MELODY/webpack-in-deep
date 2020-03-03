const webpack = require('webpack');
const path = require('path');

module.exports = (example) => {
  console.log(`=========start ${example}========\n`);

  const context = path.join(__dirname, '..', 'packages', example);
  const config = require(path.join(context, 'webpack.config.js'));

  const complier = webpack(config);

  complier.run((err, status) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(status.toString({
      colors: true
    }));
  })
}



