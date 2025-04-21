import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Проєкт студентів ФІОТу",
  description: "Lab5",
  base:"/DB_Labs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Автори', link: '/authors' },
      { text: 'Вступ', link: '/vstup' },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruslan-LT/DB_Labs.git' }
    ]
  }
})
