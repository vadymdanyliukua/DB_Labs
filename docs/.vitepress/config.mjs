import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "проєкт студентів ФІОТ",
  description: "Lab5",
  base:"/Develop1/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Аналіз предметної області', link: '/vstup' },
      { text: 'Запити зацікавлених осіб', link: '/zapity' },
      {text:'Автори', link: '/authors' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
