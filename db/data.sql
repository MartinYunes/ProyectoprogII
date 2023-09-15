CREATE SCHEMA proyectoprog22;

use proyectoprog22;

create table usuarios (
	id int unsigned primary key auto_increment,
    usuario VARCHAR(100) UNIQUE NOT NULL,
    email varchar(500) unique not null,
    contraseña varchar(500) not null,
    foto_perfil varchar(500) not null,
    fecha_nacimiento date not null,
    DNI int not null,
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
    
);



INSERT INTO usuarios 
VALUES(default, 'Ma23', 'lebron@udesa.edu.ar', 'lecap', 'fotoperfil1', '2003-03-03', 45489557, default, default);
INSERT INTO usuarios
VALUES(default, 'Ma24', 'stephen@udesa.edu.ar', 'splash', 'fotoperfil2', '2003-03-03', 42415374, default, default);
INSERT INTO usuarios 
VALUES(default, 'Ma25', 'mateo@udesa.edu.ar', 'mate', 'fotoperfil3', '2003-03-03', 42415543, default, default);
INSERT INTO usuarios
VALUES(default, 'Ma26', 'martin@udesa.edu.ar', 'mors', 'https://cdn.nba.com/manage/2022/04/kareem-trophy-1982.jpg', '2003-03-03', 43415398, default, default);
INSERT INTO usuarios 
VALUES(default, 'Ma27', 'marcelo@udesa.edu.ar', 'conocelo', 'fotoperfil5', '2003-03-03', 43514632, default, default);


create table productos(
	id int unsigned primary key auto_increment,
    id_usuario int unsigned,
    nombre_producto varchar(500) not null,
    descripcion_producto varchar(500) not null,
    createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
    imagenes VARCHAR(500) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


INSERT INTO productos 
VALUES(default, 1, 'Tesla Model S', 'El Tesla Model S es un sedán eléctrico de lujo que ofrece un rendimiento excepcional y una autonomía impresionante. Es uno de los vehículos eléctricos más populares del mercado.', default, default, '/images/products/tesla.jpeg');
INSERT INTO productos 
VALUES(default, 2, 'Ford Mustang', 'El Ford Mustang es un icónico auto deportivo estadounidense que ofrece un rendimiento emocionante, un estilo clásico y una amplia gama de opciones de personalización.', default, default, '/images/products/ford-mustang.webp');
INSERT INTO productos 
VALUES(default, 2, 'Lamborghini Aventador', 'El Lamborghini Aventador es un súper deportivo italiano que ofrece un rendimiento de clase mundial, un diseño futurista y un precio exorbitante.', default, default, '/images/products/aventador.webp');
INSERT INTO productos 
VALUES(default, 4, 'Chevrolet Camaro', 'El Chevrolet Camaro es un auto deportivo americano que ofrece una experiencia de conducción emocionante, un estilo agresivo y un precio accesible.', default, default, '/images/products/camaro.webp');
INSERT INTO productos 
VALUES(default, 5, 'BMW M5', 'El BMW M5 es un sedán deportivo de lujo que ofrece un rendimiento excepcional, una tecnología avanzada y un estilo elegante', default, default, '/images/products/bmwm5.jpeg');
INSERT INTO productos 
VALUES(default, 5, 'Audi R8', 'El Audi R8 es un súper deportivo alemán que ofrece un rendimiento impresionante, un diseño aerodinámico y una tecnología de vanguardia.', default, default, '/images/products/r8.jpeg');
INSERT INTO productos 
VALUES(default, 4, 'Porsche 911', 'El Porsche 911 es un auto deportivo alemán que ofrece un rendimiento de alto nivel, un diseño icónico y una experiencia de conducción emocionante.', default, default, '/images/products/porsche911.jpeg');
INSERT INTO productos 
VALUES(default, 3, 'Mercedes benz AMG GT', 'El Mercedes-Benz AMG GT es un súper deportivo de lujo que ofrece un rendimiento de clase mundial, un diseño elegante y una tecnología avanzada.', default, default, '/images/products/amg-gtr.jpeg');






create table comentarios (
	id int unsigned primary key auto_increment,
    post_id int unsigned,
    id_usuario int unsigned,
    texto varchar (500) not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES productos(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)

);
INSERT INTO comentarios
VALUES(default, 3, 3, 'esta bueno', default, default);
INSERT INTO comentarios 
values(default,  4, 5, 'no me gusta', default, default);
INSERT INTO comentarios 
values(default,  2, 1, 'anda muy fluido', default, default);
INSERT INTO comentarios 
VALUES(default,  3, 4, 'anda rapido', default, default);
INSERT INTO comentarios 
VALUES(default,  2, 2, 'esta mas o menos', default, default);
INSERT INTO comentarios 
values(default,  4, 4, 'tremenda!', default, default);
INSERT INTO comentarios 
values(default,  2, 3, 'no me gustan los asientos', default, default);
INSERT INTO comentarios 
values(default, 3, 1, 'me convencio', default, default);
INSERT INTO comentarios 
values(default,  2, 4,'no me convencio', default, default);
INSERT INTO comentarios 
values(default, 4, 2, 'me parecio rapida', default, default);
INSERT INTO comentarios 
values(default,  5, 2, 'es lenta', default, default);
INSERT INTO comentarios 
values(default,  4, 5, 'poco espacio dentro del auto', default, default);