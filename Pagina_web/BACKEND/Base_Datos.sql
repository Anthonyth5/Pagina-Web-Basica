create database DB_Comentario;

use DB_Comentario;

create table comentario_user(
	user_id int not null auto_increment,
    user_name varchar(25) not null unique,
    user_comen varchar(500) not null,
    create_at timestamp not null default (now()),
    primary key(user_id)
);
