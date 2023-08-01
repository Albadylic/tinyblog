module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets/");
  eleventyConfig.addWatchTarget("./assets/style.css");
  eleventyConfig.addWatchTarget("./assets/gregor.jpg");
};
