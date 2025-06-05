import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Проєкт студентів ФІОТу",
  description: "Лабораторні",
  base:"/DB_Labs/",
  themeConfig: {
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
      { text: 'Реалізація інформаційного та програмного забезпечення', link: '/lab5' },
      { text: 'Реалізація RESTful сервісу та тестування', link: '/lab6' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruslan-LT/DB_Labs.git' }
    ]
  }
})
