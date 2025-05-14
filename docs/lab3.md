# Проєктування бази данних

## Модель бізнес - об'єктів

![BuisnessObjectsModels](/BuisnessObjectsModels.jpg)

## ER-модель

![ERModel](/ERModel.jpg)

## Реляційна схема

### Users

| Поле        | Тип даних | Ключ                      |
| ----------- | --------- | ------------------------- |
| id          | SERIAL    | PRIMARY KEY               |
| login       | VARCHAR   | NOT NULL                  |
| first\_name | VARCHAR   |                           |
| last\_name  | VARCHAR   |                           |
| password    | VARCHAR   | NOT NULL                  |
| email       | VARCHAR   | UNIQUE                    |
| role\_id    | INT       | FOREIGN KEY → `Roles(id)` |

## Roles

| Поле  | Тип даних | Ключ        |
| ----- | --------- | ----------- |
| id    | SERIAL    | PRIMARY KEY |
| alias | VARCHAR   | NOT NULL    |

## Permissions

| Поле  | Тип даних | Ключ        |
| ----- | --------- | ----------- |
| id    | SERIAL    | PRIMARY KEY |
| alias | VARCHAR   | NOT NULL    |

## Permissiom_Roles

| Поле           | Тип даних | Ключ                            |
| -------------- | --------- | ------------------------------- |
| role\_id       | INT       | FOREIGN KEY → `Roles(id)`       |
| permission\_id | INT       | FOREIGN KEY → `Permissions(id)` |

## Accesses

| Поле           | Тип даних | Ключ                            |
| -------------- | --------- | ------------------------------- |
| user\_id       | INT       | FOREIGN KEY → `Users(id)`       |
| dataset\_id    | INT       | FOREIGN KEY → `Datasets(id)`    |
| permission\_id | INT       | FOREIGN KEY → `Permissions(id)` |

## Datasets

| Поле         | Тип даних | Ключ                           |
| ------------ | --------- | ------------------------------ |
| id           | SERIAL    | PRIMARY KEY                    |
| title        | VARCHAR   | NOT NULL                       |
| description  | TEXT      |                                |
| rating       | FLOAT     |                                |
| datafile\_id | INT       | FOREIGN KEY → `Datafiles(id)`  |
| category\_id | INT       | FOREIGN KEY → `Categories(id)` |

## Datafiles

| Поле        | Тип даних | Ключ                      |
| ----------- | --------- | ------------------------- |
| id          | SERIAL    | PRIMARY KEY               |
| guid        | UUID      | UNIQUE                    |
| alias       | VARCHAR   |                           |
| mime        | VARCHAR   |                           |
| description | TEXT      |                           |
| size        | NUMERIC   |                           |
| uploadedAt  | TIMESTAMP | DEFAULT NOW()             |
| user\_id    | INT       | FOREIGN KEY → `Users(id)` |


## Categories

| Поле                 | Тип даних | Ключ                           |
| -------------------- | --------- | ------------------------------ |
| id                   | SERIAL    | PRIMARY KEY                    |
| name                 | VARCHAR   | NOT NULL                       |
| description          | TEXT      |                                |
| parent\_category\_id | INT       | FOREIGN KEY → `Categories(id)` |


## Updates

| Поле        | Тип даних | Ключ                         |
| ----------- | --------- | ---------------------------- |
| hash        | TEXT      |                              |
| updated\_at | TIMESTAMP | DEFAULT NOW()                |
| message     | TEXT      |                              |
| difference  | TEXT      |                              |
| user\_id    | INT       | FOREIGN KEY → `Users(id)`    |
| dataset\_id | INT       | FOREIGN KEY → `Datasets(id)` |


![RelSchema](/RelSchema.jpg)
