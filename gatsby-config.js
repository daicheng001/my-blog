const path = require(`path`)
module.exports = {
  plugins: [
    "gatsby-plugin-stylus", 
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/md`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-highlight-code",
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
              injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
              extensions: [],         // Extensions to download from the marketplace to provide more languages and themes
              extensionDataDirectory: // Absolute path to the directory where extensions will be downloaded. Defaults to inside node_modules.
                path.resolve('extensions'),
              languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
                content,              //   - the string content of the line
                index,                //   - the zero-based index of the line within the code fence
                language,             //   - the language specified for the code fence
                meta                  //   - any options set on the code fence alongside the language (more on this later)
              }) => '',
              logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-transformer-sharp"
  ],
  siteMetadata: {
    title: "My Blog",
    author: "Amberley Romo",
    description: "A collection of my thoughts and writings.",
    siteUrl: "https://amberley.blog/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/amber1ey",
      },
      {
        name: "github",
        url: "https://github.com/amberleyromo",
      },
    ],
  },
}
