// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rafael Mateus',
  tagline: 'Software Developer',
  url: 'https://rafaelbmateus.github.io',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://github.com/rafaelbmateus.png',
  organizationName: 'rafaelbmateus',
  projectName: 'blog',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {to: 'https://www.rafaelbmateus.com.br', label: 'Rafael Mateus', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/tags', label: 'Tags', position: 'left'},
          {
            href: 'https://github.com/rafaelbmateus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rafaelbmateus',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/rafaelbmateus',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/rafaelbmateus',
              },
            ],
          },
          {
            items: [
              {
                label: 'Web Page',
                href: 'https://rafaelbmateus.com.br',
              },
              {
                label: 'Portfolio',
                href: 'https://rafaelbmateus.github.io/me',
              },
              {
                label: 'whiteStone_dev',
                href: 'https://whitestonedev.com.br',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/rafaelbmateus',
              },
              {
                label: 'Dev Community',
                to: 'https://dev.to/rafaelbmateus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rafael Mateus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
