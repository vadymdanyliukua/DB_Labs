import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Проєкт студентів ФІОТу",
  description: "Лабораторні",
  base:"/DB_Labs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Автори', link: '/authors' },
      { text: 'Вступ', link: '/vstup_1' },
    ],
    sidebar: [
      { text: 'Головна', link: '/' },
      { text: 'Вступ', link: '/vstup_1' },
      { text: 'Аналіз предметної області', link: '/vstup' },
      { text: 'Запити зацікавлених осіб', link: '/zapity'},
      { text: 'Модель прецедентів', link: '/lab2'},
      { text: 'Автори', link: '/authors' },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruslan-LT/DB_Labs.git' }
    ]
  }
})
