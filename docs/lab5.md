# Реалізація інформаційного та програмного забезпечення
## SQL-Скрипт для створення початкового наповнення бази даних

```sql
BEGIN;

CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL,
    login character varying(30) NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying(30) NOT NULL,
    role_id integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Roles"
(
    id integer NOT NULL,
    alias character varying(15) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Permission_Roles"
(
    role_id integer NOT NULL,
    permission_id integer NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Permissions"
(
    id integer NOT NULL,
    alias character varying(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Accesses"
(
    user_id integer NOT NULL,
    permission_id integer NOT NULL,
    dataset_id integer NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Datasets"
(
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    description character varying(500) NOT NULL,
    rating real NOT NULL,
    datafile_id integer,
    category_id integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Datafiles"
(
    id integer NOT NULL,
    guid uuid NOT NULL,
    alias character varying(50) NOT NULL,
    mime character varying(50) NOT NULL,
    "description" character varying(500) NOT NULL,
    size real NOT NULL,
    "uploadedAt" timestamp without time zone NOT NULL,
    user_id integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Categories"
(
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    description character varying(500) NOT NULL,
    parent_category_id integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Updates"
(
    hash character varying NOT NULL,
    updatet_at timestamp without time zone NOT NULL,
    message character varying(150) NOT NULL,
    difference character varying NOT NULL,
    user_id integer NOT NULL,
    dataset_id integer NOT NULL
);

ALTER TABLE IF EXISTS public."Users"
    ADD FOREIGN KEY (role_id)
    REFERENCES public."Roles" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Permission_Roles"
    ADD FOREIGN KEY (role_id)
    REFERENCES public."Roles" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Permission_Roles"
    ADD FOREIGN KEY (permission_id)
    REFERENCES public."Permissions" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Accesses"
    ADD FOREIGN KEY (user_id)
    REFERENCES public."Users" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Accesses"
    ADD FOREIGN KEY (permission_id)
    REFERENCES public."Permissions" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Accesses"
    ADD FOREIGN KEY (dataset_id)
    REFERENCES public."Datasets" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Datasets"
    ADD FOREIGN KEY (datafile_id)
    REFERENCES public."Datafiles" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Datasets"
    ADD FOREIGN KEY (category_id)
    REFERENCES public."Categories" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Datafiles"
    ADD FOREIGN KEY (user_id)
    REFERENCES public."Users" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Categories"
    ADD FOREIGN KEY (parent_category_id)
    REFERENCES public."Categories" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Updates"
    ADD FOREIGN KEY (user_id)
    REFERENCES public."Users" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public."Updates"
    ADD FOREIGN KEY (dataset_id)
    REFERENCES public."Datasets" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

COMMIT;

BEGIN;

-- Ролі
INSERT INTO public."Roles" (id, alias) VALUES
(1, 'guest'),
(2, 'user'),
(3, 'admin');

INSERT INTO public."Permissions" (id, alias) VALUES
(1, 'guest_register'),
(2, 'guest_download'),
(3, 'guest_search'),
(4, 'user_auth'),
(5, 'rate_data'),
(6, 'user_data_suggestion'),
(7, 'visualize_data'),
(8, 'admin_auth'),
(9, 'admin_data_manage'),
(10, 'admin_ban_user');


INSERT INTO public."Permission_Roles" (role_id, permission_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 7);

INSERT INTO public."Permission_Roles" (role_id, permission_id) VALUES
(2, 2), (2, 3), (2, 5), (2, 6), (2, 7);

INSERT INTO public."Permission_Roles" (role_id, permission_id) VALUES
(3, 2), (3, 3), (3, 5), (3, 6), (3, 7), (3, 8), (3, 9), (3, 10);

INSERT INTO public."Users" (id, login, first_name, last_name, password, email, role_id) VALUES
(1, 'admin_user', 'Admin', 'Root', 'hashed_admin_pass', 'admin@example.com', 3),
(2, 'regular_user', 'John', 'Doe', 'hashed_user_pass', 'user@example.com', 2),
(3, 'guest_user', 'Guest', 'Viewer', 'guest_pass', 'guest@example.com', 1);

INSERT INTO public."Categories" (id, name, description, parent_category_id) VALUES
(1, 'Environment', 'Data related to climate, pollution, and weather', NULL),
(2, 'Demographics', 'Data about population, age, and gender distributions', NULL),
(3, 'Geospatial', 'Maps and satellite data', NULL);

INSERT INTO public."Datafiles" (id, guid, alias, mime, description, size, "uploadedAt", user_id) VALUES
(1, gen_random_uuid(), 'climate_data_2020.csv', 'text/csv', 'Climate dataset for 2020', 12.5, NOW(), 2),
(2, gen_random_uuid(), 'population_stats_2023.json', 'application/json', 'Global population statistics', 8.7, NOW(), 2),
(3, gen_random_uuid(), 'satellite_imagery.zip', 'application/zip', 'Raw satellite imagery files for South America', 150.2, NOW(), 1);

INSERT INTO public."Datasets" (id, title, description, rating, datafile_id, category_id) VALUES
(1, 'Global Climate 2020', 'Comprehensive climate indicators for year 2020', 4.3, 1, 1),
(2, 'World Population 2023', 'Official demographic data for all countries', 4.6, 2, 2),
(3, 'South America Satellite Imagery', 'High-resolution satellite images for geospatial analysis', 4.1, 3, 3);

COMMIT;
