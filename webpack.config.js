const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
chainWebpack: (config) => {
  config.resolve.alias.set("@", resolve("src"));
};
