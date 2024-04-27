import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OptShot",
  description: "documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Optshot.com', link: 'https://optshot.com' },
    ],

    sidebar: [
      {
        text: 'Document',
        items: [
          { text: 'Quickstart', link: '/1_quick_start' },
          { text: 'Settings', link: '/2_setting_options' },
          { text: 'Freq Questions', link: '/3_freq_question' },
          { text: 'Contact', link: '/4_contact' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/optshot/optshot' }
    ]
  }
})
