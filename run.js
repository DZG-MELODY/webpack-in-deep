const webpack = require('webpack');
const path = require('path');

const [_, example] = process.argv.splice(1);

console.log(`=========start ${example}========\n`);

const context = path.join(__dirname, 'packages', example);
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


