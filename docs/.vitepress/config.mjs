import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Проєкт студентів ФІОТу",
  description: "Lab5",
  base:"/Develop1/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Автори', link: '/authors' },
      { text: 'Аналіз предметної області', link: '/vstup' },
      {text:'Запити зацікавлених осіб', link: '/zapity' },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
