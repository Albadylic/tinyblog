module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets/style.css");
  eleventyConfig.addWatchTarget("./assets/style.css");
};
