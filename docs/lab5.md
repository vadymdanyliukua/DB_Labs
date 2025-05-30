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

END;
