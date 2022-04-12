create database vcode;

create table usuarios(
    id serial not null,
    nombre varchar(35) not null,
    apellidos varchar(60) not null,
    experiencia text not null,
    teléfono varchar(15) not null,
    usuario varchar(20) not null,
    contra varchar(60) not null,
    correo varchar(60) not null,
    primary key(id)
);

create table empresas(
    id serial not null,
    nombre varchar(35) not null,
    usuario varchar(20) not null,
    contra varchar(60) not null,
    correo varchar(60) not null,
    primary key(id)
);

create table proyectos(
    id serial not null,
    nombre varchar(35) not null,
    empresa int,
    usuario text not null,
    primary key(id),
);

alter table proyectos 
add constraint fk_id 
foreign key (empresa) 
references empresas (id);

create table material(
    id serial not null,
    usuario varchar(60) not null,
    titutlo varchar(200) not null,
    descripcion text,
    referencia text not null,
    primary key(id),create table material(
    id serial not null,
    usuario varchar(60) not null,
    titutlo varchar(200) not null,
    descripcion text,
    referencia text not null,
    primary key(id),
);
);

insert into usuarios(
    nombre,
    apellidos,
    experiencia,
    teléfono,
    usuario,
    contra,
    correo)
 values(
    'Juan Pablo',
    'Campos Casasanero',
    'java, node, html, css',
    '7351013030',
    'jp322',
    '1234',
    'juanpc@gmail.com');