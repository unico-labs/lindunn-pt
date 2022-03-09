const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-nesting-toc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(pluginTOC, { tags: ["h2", "h3"] });

  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true, linkify: true, typographer: true }).use(
      markdownItAnchor
    )
  );

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
