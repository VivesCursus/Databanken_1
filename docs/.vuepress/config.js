module.exports = {
  title: 'Databanken 1',
  description: 'CRUD-instructies',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
    ],
    repo: 'https://github.com/VivesCursus/Databanken_1',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
