module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/img");
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });
  return {
    dir: {
      input: "content",
      output: "_site"
    }
  }
};
