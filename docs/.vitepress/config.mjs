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
      { text: 'Автори', link: '/authors' },
      { text: 'Вступ', link: '/vstup_1' },
      { text: 'Аналіз предметної області', link: '/vstup' },
      { text: 'Запити зацікавлених осіб', link: '/zapity'},
      { text: 'Модель прецедентів', link: '/lab2'},
      { text: 'Проєктування інформаційного забезпечення: проєктування бази данних', link: '/lab3' },
      { text: 'Реалізація інформаційного та програмного забезпечення:SQL-скрипт для створення на початкового наповнення бази даних', link: '/lab5' },
      
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruslan-LT/DB_Labs.git' }
    ]
  }
})
