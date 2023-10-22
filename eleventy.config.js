module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/img");
  eleventyConfig.setBrowserSyncConfig({
		files: './docs/css/**/*.css'
	});
  return {
    dir: {
      input: "content",
      output: "docs"
    }
  }
};
